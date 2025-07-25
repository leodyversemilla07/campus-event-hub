import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {

  return (
    <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8">
      {/* Header */}
      <Header />
      <Separator className="w-full max-w-6xl mb-8" />
      {/* Hero Section */}
      <section className="relative w-full flex justify-center items-center mb-16">
        <div className="relative w-full max-w-3xl text-center py-16 px-4 rounded-xl shadow-sm">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-primary">Campus Event Hub</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6">
            The centralized platform for university students and organizations to discover, share, and engage in campus events, activities, and social gatherings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" asChild>
              <a href="#" className="w-full sm:w-auto">Get Started</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#" className="w-full sm:w-auto">Browse Events</a>
            </Button>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground">
            Discover what&apos;s happening on campus—from academic workshops to social events, club meetings, and guest lectures.
          </p>
        </div>
      </section>

      {/* What is Campus Event Hub? */}
      <section className="w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-primary">What is Campus Event Hub?</h2>
        <p className="text-muted-foreground">
          Campus Event Hub solves the problem of event discovery and engagement in university communities. Instead of relying on scattered social media posts, email lists, and bulletin boards, students and organizations can use a single platform to share, discover, and participate in campus events.
        </p>
      </section>

      {/* Core Features */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Core Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold mb-1 text-primary">Event Discovery</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Browse by category</li>
              <li>Search & filter events</li>
              <li>Calendar view</li>
              <li>Personalized recommendations</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-primary">Event Management</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Create and manage events</li>
              <li>Media support for event images</li>
              <li>Organization branding</li>
              <li>Event categories & privacy controls</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-primary">Real-Time Engagement</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Instant RSVP system</li>
              <li>Waitlist management</li>
              <li>Live comments & nested conversations</li>
              <li>Social indicators</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-primary">Organization Profiles & Notifications</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Organization pages & event history</li>
              <li>Admin management & verification</li>
              <li>Analytics access</li>
              <li>Event reminders & updates</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User Types & Roles */}
      <section className="w-full max-w-3xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">User Types & Roles</h2>
        <ul className="list-disc list-inside text-foreground">
          <li><b>Students:</b> Browse and search events, RSVP, comment, build profiles, and receive recommendations</li>
          <li><b>Organization Administrators:</b> Manage events, access analytics, moderate comments, and send announcements</li>
          <li><b>Super Administrators:</b> Moderate content, manage verifications, handle reports, and maintain platform policies</li>
        </ul>
      </section>

      {/* Key Benefits */}
      <section className="w-full max-w-4xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Key Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold mb-1 text-primary">For Students</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Centralized discovery</li>
              <li>Social integration</li>
              <li>Personalized experience</li>
              <li>Easy participation</li>

              <li>Community engagement</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-primary">For Organizations</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Increased visibility</li>
              <li>Better engagement</li>
              <li>Simplified management</li>
              <li>Data insights</li>
              <li>Professional presence</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-1 text-primary">For Universities</h3>
            <ul className="list-disc list-inside text-foreground">
              <li>Enhanced campus life</li>
              <li>Improved communication</li>
              <li>Event coordination</li>
              <li>Student retention</li>
              <li>Community building</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">How It Works</h2>
        <ol className="list-decimal list-inside text-foreground space-y-1">
          <li><b>Sign Up:</b> Create accounts linked to your university</li>
          <li><b>Explore:</b> Browse events by category, search, or view the calendar</li>
          <li><b>Engage:</b> RSVP, join discussions, and connect with attendees</li>
          <li><b>Create:</b> Only organization administrators can create events</li>
          <li><b>Participate:</b> Attend events and continue conversations</li>
          <li><b>Build Community:</b> Form lasting connections through shared interests</li>
        </ol>
      </section>

      {/* Community Guidelines */}
      <section className="w-full max-w-2xl mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-primary">Community Guidelines</h2>
        <ul className="list-disc list-inside text-foreground">
          <li>Respectful communication</li>
          <li>Accurate and helpful event information</li>
          <li>Inclusive events for all</li>
          <li>Constructive feedback and support</li>
          <li>Academic and personal growth</li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}
