namespace approval;


entity Users {
key userId : String(40);
userName : String(100);
role : String(30); // MANAGER / ADMIN
}


entity WorkInbox {
key requestId : UUID;
userId : String(40);
roleRequested : String(50);
status : String(20); // PENDING / APPROVED / REJECTED
reviewer : String(40);
createdAt : Timestamp;
}


entity ReviewCycles {
key cycleId : UUID;
roleName : String(60);
totalUsers : Integer;
reviewedUsers : Integer;
status : String(20);
createdAt : Timestamp;
}


entity ReviewStatus {
key id : UUID;
transactionCd : String(30);
userId : String(40);
reviewStatus : String(20);
reviewedBy : String(40);
}


entity SoDReview {
key id : UUID;
userId : String(40);
conflictType : String(80);
status : String(20);
mitigated : Boolean;
}