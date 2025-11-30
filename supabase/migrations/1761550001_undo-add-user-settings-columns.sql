-- Undo: Remove user settings columns from profiles table
ALTER TABLE profiles
DROP COLUMN IF EXISTS theme,
DROP COLUMN IF EXISTS email_notifications,
DROP COLUMN IF EXISTS push_notifications,
DROP COLUMN IF EXISTS marketing_emails,
DROP COLUMN IF EXISTS language,
DROP COLUMN IF EXISTS profile_visibility,
DROP COLUMN IF EXISTS two_factor_enabled;
