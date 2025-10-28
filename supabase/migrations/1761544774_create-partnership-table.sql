-- Create partnership inquiries table
CREATE TABLE partnership_inquiries (
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

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow partnership inquiry submissions" ON partnership_inquiries
    FOR INSERT WITH CHECK (true);

-- Create policy for admin access (you can modify this based on your admin setup)
CREATE POLICY "Admin can view partnership inquiries" ON partnership_inquiries
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Function to handle partnership inquiry notifications
CREATE OR REPLACE FUNCTION public.handle_partnership_inquiry()
RETURNS TRIGGER AS $$
BEGIN
    -- You can add email notification logic here
    -- For now, we'll just return the new record
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for partnership inquiry submissions
CREATE TRIGGER on_partnership_inquiry_created
    AFTER INSERT ON partnership_inquiries
    FOR EACH ROW EXECUTE FUNCTION public.handle_partnership_inquiry();
