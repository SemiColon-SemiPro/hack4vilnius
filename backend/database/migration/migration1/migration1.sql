BEGIN TRANSACTION;

ALTER TABLE applications
ADD occupied_property TEXT;

ALTER TABLE applications
ADD useful_mq INTEGER;

COMMIT;