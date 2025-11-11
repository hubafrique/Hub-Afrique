-- Create partnership_inquiries table
CREATE TABLE IF NOT EXISTS partnership_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  interest_type TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE partnership_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting partnership inquiries (anyone can submit)
CREATE POLICY "Anyone can submit partnership inquiries" ON partnership_inquiries
  FOR INSERT WITH CHECK (true);

-- Create policy for viewing partnership inquiries (only authenticated users)
CREATE POLICY "Only authenticated users can view partnership inquiries" ON partnership_inquiries
  FOR SELECT USING (auth.role() = 'authenticated');

-- Create index for better performance
CREATE INDEX IF NOT EXISTS partnership_inquiries_created_at_idx ON partnership_inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS partnership_inquiries_email_idx ON partnership_inquiries(email);
