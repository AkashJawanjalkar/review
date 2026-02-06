const cds = require('@sap/cds');


module.exports = cds.service.impl(async function () {


const { WorkInbox } = this.entities;


this.on('approveRequest', async req => {
const { requestId } = req.data;
await UPDATE(WorkInbox).set({ status: 'APPROVED' }).where({ requestId });
return 'Approved';
});


this.on('rejectRequest', async req => {
const { requestId } = req.data;
await UPDATE(WorkInbox).set({ status: 'REJECTED' }).where({ requestId });
return 'Rejected';
});


});