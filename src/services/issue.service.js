const Issue = require("../database/models/issue.model")

const getAllIssues = async () => {
    return await Issue.findAll();
}

const getIssueById = async (id) => {
    return await Issue.findByPk(id);
}

const createIssue = async (issue) => {
    return await Issue.create(issue);
}

const updateIssue = async (id, issue) => {
    return await Issue.update(issue, {
        where: {
            id: id
        }
    });
}

const deleteIssue = async (id) => {
    return await Issue.destroy({
        where: {
            id: id
        }
    });
}

module.exports = {
    getAllIssues,
    getIssueById,
    createIssue,
    updateIssue,
    deleteIssue
};