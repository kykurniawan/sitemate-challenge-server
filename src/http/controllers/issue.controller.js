const { getAllIssues, getIssueById, createIssue, deleteIssue, updateIssue } = require("../../services/issue.service")

const index = async (req, res) => {
    const issues = await getAllIssues();

    return res.json(issues);
}

const show = async (req, res) => {
    const { id } = req.params;

    const issue = await getIssueById(id);

    if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
    }

    return res.json(issue);
}

const store = async (req, res) => {
    const { title, description } = req.body;

    const issue = await createIssue({ title, description });

    return res.json(issue);
}

const update = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    const issue = await getIssueById(id);

    if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
    }

    await updateIssue(id, { title, description });

    return res.json({ message: "Issue updated" });
}

const destroy = async (req, res) => {
    const { id } = req.params;

    const issue = await getIssueById(id);

    if (!issue) {
        return res.status(404).json({ message: "Issue not found" });
    }

    await deleteIssue(id);

    return res.json({ message: "Issue deleted" });
}

module.exports = {
    index,
    show,
    store,
    update,
    destroy
};