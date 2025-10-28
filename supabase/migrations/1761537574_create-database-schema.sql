-- Create custom types
CREATE TYPE user_role AS ENUM ('learner', 'mentor', 'recruiter');
CREATE TYPE prolab_status AS ENUM ('not_started', 'in_progress', 'completed');
CREATE TYPE mentorship_type AS ENUM ('one_on_one', 'project_board');
CREATE TYPE application_status AS ENUM ('pending', 'accepted', 'rejected');
CREATE TYPE notification_type AS ENUM ('welcome', 'certificate', 'ihub_invite', 'job_application', 'general');

-- Profiles table (extends Supabase auth.users)
CREATE TABLE profiles (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    full_name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    role user_role NOT NULL DEFAULT 'learner',
    prolab_status prolab_status NOT NULL DEFAULT 'not_started',
    profile_picture TEXT,
    bio TEXT,
    skills TEXT[],
    location TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Tech', 'Freelance', 'Founder'
    tags TEXT[],
    instructor_id UUID REFERENCES profiles(id),
    duration_hours INTEGER,
    difficulty_level TEXT, -- 'Beginner', 'Intermediate', 'Advanced'
    thumbnail_url TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE enrollments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    progress INTEGER DEFAULT 0 CHECK (progress >= 0 AND progress <= 100),
    certificate_link TEXT,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- Onboarding forms table (for iHub access)
CREATE TABLE onboarding_forms (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE UNIQUE,
    mentorship_type mentorship_type NOT NULL,
    selected_skills TEXT[] NOT NULL,
    goals TEXT NOT NULL,
    completed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Jobs table
CREATE TABLE jobs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    company TEXT NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT[],
    location TEXT,
    salary_range TEXT,
    job_type TEXT, -- 'Full-time', 'Part-time', 'Contract', 'Remote'
    posted_by UUID REFERENCES profiles(id),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Job applications table
CREATE TABLE job_applications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    job_id UUID REFERENCES jobs(id) ON DELETE CASCADE,
    status application_status DEFAULT 'pending',
    cover_letter TEXT,
    resume_url TEXT,
    applied_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, job_id)
);

-- Notifications table
CREATE TABLE notifications (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    type notification_type NOT NULL,
    title TEXT NOT NULL,
    message TEXT NOT NULL,
    read BOOLEAN DEFAULT false,
    metadata JSONB, -- For storing additional data like links, course_id, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects table (for iHub)
CREATE TABLE projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL,
    skills_required TEXT[],
    team_size_limit INTEGER DEFAULT 5,
    current_team_size INTEGER DEFAULT 0,
    mentor_id UUID REFERENCES profiles(id),
    status TEXT DEFAULT 'recruiting', -- 'recruiting', 'in_progress', 'completed'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project members table
CREATE TABLE project_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    project_id UUID REFERENCES projects(id) ON DELETE CASCADE,
    user_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    role TEXT DEFAULT 'member', -- 'member', 'lead'
    joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(project_id, user_id)
);

-- Mentorship sessions table
CREATE TABLE mentorship_sessions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    mentor_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    mentee_id UUID REFERENCES profiles(id) ON DELETE CASCADE,
    scheduled_at TIMESTAMP WITH TIME ZONE NOT NULL,
    duration_minutes INTEGER DEFAULT 60,
    status TEXT DEFAULT 'scheduled', -- 'scheduled', 'completed', 'cancelled'
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE mentorship_sessions ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Profiles: Users can read all profiles but only update their own
CREATE POLICY "Public profiles are viewable by everyone" ON profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
    FOR UPDATE USING (auth.uid() = id);

-- Courses: Everyone can read, only instructors can modify
CREATE POLICY "Courses are viewable by everyone" ON courses
    FOR SELECT USING (true);

CREATE POLICY "Instructors can insert courses" ON courses
    FOR INSERT WITH CHECK (auth.uid() = instructor_id);

CREATE POLICY "Instructors can update their courses" ON courses
    FOR UPDATE USING (auth.uid() = instructor_id);

-- Enrollments: Users can only see and modify their own enrollments
CREATE POLICY "Users can view their own enrollments" ON enrollments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own enrollments" ON enrollments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own enrollments" ON enrollments
    FOR UPDATE USING (auth.uid() = user_id);

-- Onboarding forms: Users can only access their own
CREATE POLICY "Users can view their own onboarding form" ON onboarding_forms
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own onboarding form" ON onboarding_forms
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own onboarding form" ON onboarding_forms
    FOR UPDATE USING (auth.uid() = user_id);

-- Jobs: Everyone can read, only recruiters can modify
CREATE POLICY "Jobs are viewable by everyone" ON jobs
    FOR SELECT USING (true);

CREATE POLICY "Recruiters can insert jobs" ON jobs
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'recruiter'
        )
    );

CREATE POLICY "Job posters can update their jobs" ON jobs
    FOR UPDATE USING (auth.uid() = posted_by);

-- Job applications: Users can see their own, recruiters can see applications for their jobs
CREATE POLICY "Users can view their own applications" ON job_applications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Recruiters can view applications for their jobs" ON job_applications
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM jobs 
            WHERE id = job_applications.job_id AND posted_by = auth.uid()
        )
    );

CREATE POLICY "Users can insert their own applications" ON job_applications
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own applications" ON job_applications
    FOR UPDATE USING (auth.uid() = user_id);

-- Notifications: Users can only see their own
CREATE POLICY "Users can view their own notifications" ON notifications
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own notifications" ON notifications
    FOR UPDATE USING (auth.uid() = user_id);

-- Projects: Everyone can read, mentors can create/modify
CREATE POLICY "Projects are viewable by everyone" ON projects
    FOR SELECT USING (true);

CREATE POLICY "Mentors can insert projects" ON projects
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM profiles 
            WHERE id = auth.uid() AND role = 'mentor'
        )
    );

CREATE POLICY "Project mentors can update their projects" ON projects
    FOR UPDATE USING (auth.uid() = mentor_id);

-- Project members: Members can see their projects, mentors can manage
CREATE POLICY "Users can view projects they're part of" ON project_members
    FOR SELECT USING (
        auth.uid() = user_id OR 
        EXISTS (
            SELECT 1 FROM projects 
            WHERE id = project_members.project_id AND mentor_id = auth.uid()
        )
    );

CREATE POLICY "Users can join projects" ON project_members
    FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Mentorship sessions: Mentors and mentees can see their sessions
CREATE POLICY "Users can view their mentorship sessions" ON mentorship_sessions
    FOR SELECT USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

CREATE POLICY "Mentors can create sessions" ON mentorship_sessions
    FOR INSERT WITH CHECK (auth.uid() = mentor_id);

CREATE POLICY "Mentors and mentees can update sessions" ON mentorship_sessions
    FOR UPDATE USING (auth.uid() = mentor_id OR auth.uid() = mentee_id);

-- Functions and Triggers

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers to relevant tables
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON profiles
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at BEFORE UPDATE ON enrollments
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_jobs_updated_at BEFORE UPDATE ON jobs
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_job_applications_updated_at BEFORE UPDATE ON job_applications
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Function to automatically create profile on user signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, full_name, email)
    VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name', NEW.email);
    
    -- Send welcome notification
    INSERT INTO public.notifications (user_id, type, title, message)
    VALUES (
        NEW.id, 
        'welcome', 
        'Welcome to Hub Afrique!', 
        'Start your professional journey by exploring ProLab courses.'
    );
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user signup
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Function to handle course completion and certificate generation
CREATE OR REPLACE FUNCTION public.handle_course_completion()
RETURNS TRIGGER AS $$
BEGIN
    -- Check if progress reached 100% and certificate not yet issued
    IF NEW.progress = 100 AND OLD.progress < 100 AND NEW.certificate_link IS NULL THEN
        -- Generate certificate link (in real app, this would be a proper certificate service)
        NEW.certificate_link = 'https://certificates.hubafrique.com/' || NEW.id;
        NEW.completed_at = NOW();
        
        -- Update user's ProLab status to completed
        UPDATE profiles 
        SET prolab_status = 'completed' 
        WHERE id = NEW.user_id AND prolab_status != 'completed';
        
        -- Send certificate notification
        INSERT INTO notifications (user_id, type, title, message, metadata)
        VALUES (
            NEW.user_id,
            'certificate',
            'Congratulations! Course Completed',
            'You have successfully completed the course and earned your certificate. You now have access to iHub!',
            jsonb_build_object(
                'certificate_link', NEW.certificate_link,
                'course_id', NEW.course_id,
                'ihub_access', true
            )
        );
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for course completion
CREATE TRIGGER on_course_completion
    BEFORE UPDATE ON enrollments
    FOR EACH ROW EXECUTE FUNCTION public.handle_course_completion();

-- Insert sample data
INSERT INTO courses (title, description, category, tags, duration_hours, difficulty_level, thumbnail_url) VALUES
('Introduction to Web Development', 'Learn the basics of HTML, CSS, and JavaScript', 'Tech', ARRAY['HTML', 'CSS', 'JavaScript'], 40, 'Beginner', '/placeholder.svg?height=200&width=300&text=Web+Dev'),
('Python for Data Science', 'Master Python programming for data analysis and machine learning', 'Tech', ARRAY['Python', 'Data Science', 'Machine Learning'], 60, 'Intermediate', '/placeholder.svg?height=200&width=300&text=Python'),
('Freelancing Fundamentals', 'Build a successful freelancing career', 'Freelance', ARRAY['Business', 'Marketing', 'Client Management'], 25, 'Beginner', '/placeholder.svg?height=200&width=300&text=Freelance'),
('Startup Founder Bootcamp', 'From idea to IPO - complete founder journey', 'Founder', ARRAY['Entrepreneurship', 'Business Strategy', 'Fundraising'], 80, 'Advanced', '/placeholder.svg?height=200&width=300&text=Startup');

-- Insert sample jobs
INSERT INTO jobs (title, company, description, requirements, location, salary_range, job_type) VALUES
('Frontend Developer', 'TechCorp Africa', 'Build amazing user interfaces with React and TypeScript', ARRAY['React', 'TypeScript', 'CSS'], 'Lagos, Nigeria', '$30,000 - $50,000', 'Full-time'),
('Data Scientist', 'DataFlow Kenya', 'Analyze data and build ML models', ARRAY['Python', 'Machine Learning', 'SQL'], 'Nairobi, Kenya', '$40,000 - $70,000', 'Full-time'),
('UX Designer', 'Design Studio Ghana', 'Create beautiful and functional user experiences', ARRAY['Figma', 'User Research', 'Prototyping'], 'Accra, Ghana', '$25,000 - $45,000', 'Full-time');

-- Insert sample projects
INSERT INTO projects (title, description, category, skills_required, team_size_limit) VALUES
('E-commerce Platform', 'Build a modern e-commerce platform for African businesses', 'Web Development', ARRAY['React', 'Node.js', 'MongoDB'], 5),
('Healthcare Analytics Dashboard', 'Create a dashboard for healthcare data visualization', 'Data Science', ARRAY['Python', 'Data Visualization', 'Healthcare'], 4),
('Mobile Banking App', 'Develop a secure mobile banking application', 'Mobile Development', ARRAY['React Native', 'Security', 'FinTech'], 6);
