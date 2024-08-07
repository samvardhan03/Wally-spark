# Import libraries
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from prophet import Prophet

# Load the dataset
file_path = 'Walmart_Sales.csv'
df = pd.read_csv(file_path)

# Display the first few rows of the dataset
print(df.head())

# Preprocess the data
df['Date'] = pd.to_datetime(df['Date'], dayfirst=True)

# Perform EDA
plt.figure(figsize=(14, 7))
sns.lineplot(x='Date', y='Weekly_Sales', data=df)
plt.title('Weekly Sales Over Time')
plt.show()

# Additional EDA: Plot by store
plt.figure(figsize=(14, 7))
sns.lineplot(x='Date', y='Weekly_Sales', hue='Store', data=df, legend=False)
plt.title('Weekly Sales Over Time by Store')
plt.show()

# Prepare data for Prophet
df_prophet = df[['Date', 'Weekly_Sales']].rename(columns={'Date': 'ds', 'Weekly_Sales': 'y'})

# Initialize and fit the model
model = Prophet(yearly_seasonality=True, weekly_seasonality=True, daily_seasonality=False)
model.add_country_holidays(country_name='US')  # Adding US holidays
model.fit(df_prophet)

# Create a dataframe for future dates
future_dates = model.make_future_dataframe(periods=52, freq='W')

# Predict future sales
forecast = model.predict(future_dates)

# Plot the forecast
fig = model.plot(forecast)
plt.title('Sales Forecast')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.show()

# Plot the forecast components
fig2 = model.plot_components(forecast)
plt.show()

# Evaluate the model
from prophet.diagnostics import cross_validation, performance_metrics

# Cross-validation
df_cv = cross_validation(model, initial='365 days', period='90 days', horizon='180 days')
df_p = performance_metrics(df_cv)
print(df_p.head())

# Save the forecast to a CSV file
forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_csv('sales_forecast.csv', index=False)

# Display the first few rows of the forecast
print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].head())
