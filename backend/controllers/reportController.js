const reportService = require('../services/reportService');

exports.generateReport = async (req, res) => {
    try {
        const report = await reportService.generateReport(req.body);
        res.status(201).json(report);
    } catch (error) {
        res.status(500).json({ error: 'Error generating report' });
    }
};

exports.getAllReports = async (req, res) => {
    try {
        const reports = await reportService.getAllReports();
        res.status(200).json(reports);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reports' });
    }
};
