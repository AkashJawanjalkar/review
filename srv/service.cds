using approval as db from '../db/schema';


service ApprovalService {
entity WorkInbox as projection on db.WorkInbox;
entity ReviewCycles as projection on db.ReviewCycles;
entity ReviewStatus as projection on db.ReviewStatus;
entity SoDReview as projection on db.SoDReview;
}