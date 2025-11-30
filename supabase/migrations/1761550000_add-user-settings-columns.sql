-- Add user settings columns to profiles table
ALTER TABLE profiles
ADD COLUMN theme TEXT DEFAULT 'system' CHECK (theme IN ('light', 'dark', 'system')),
ADD COLUMN email_notifications BOOLEAN DEFAULT true,
ADD COLUMN push_notifications BOOLEAN DEFAULT true,
ADD COLUMN marketing_emails BOOLEAN DEFAULT false,
ADD COLUMN language TEXT DEFAULT 'en',
ADD COLUMN profile_visibility TEXT DEFAULT 'public' CHECK (profile_visibility IN ('public', 'private', 'connections')),
ADD COLUMN two_factor_enabled BOOLEAN DEFAULT false;
