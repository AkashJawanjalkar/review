sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("project1.controller.View1", {

        onInit: function () {
            // Initial setup if required
        },

        onWorkInbox: function () {
            // Navigation to Work Inbox
            this.getOwnerComponent()
                .getRouter()
                .navTo("WorkInbox");
        },

        onReviewCycles: function () {
            // Navigation to Review Cycles
            this.getOwnerComponent()
                .getRouter()
                .navTo("ReviewCycles");
        },

        onReports: function () {
            // Navigation to Reports
            this.getOwnerComponent()
                .getRouter()
                .navTo("Reports");
        }

    });
});
