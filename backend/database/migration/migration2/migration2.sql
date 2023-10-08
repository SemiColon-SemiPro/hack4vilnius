BEGIN TRANSACTION;

ALTER TABLE applicants
ADD email TEXT;

ALTER TABLE applicants
ADD phone_number TEXT;

ALTER TABLE applicants
ADD applicant_type TEXT;

COMMIT;