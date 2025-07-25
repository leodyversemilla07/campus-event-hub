
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const events = [
    {
        id: 1,
        title: "AI & Machine Learning Workshop",
        date: "2025-08-10",
        location: "Engineering Hall 201",
        description: "Hands-on workshop for beginners and enthusiasts."
    },
    {
        id: 2,
        title: "Campus Music Festival",
        date: "2025-08-15",
        location: "Main Quad",
        description: "Live performances by student bands and local artists."
    },
    {
        id: 3,
        title: "Career Fair",
        date: "2025-08-20",
        location: "Student Center",
        description: "Meet recruiters from top companies and explore opportunities."
    },
    {
        id: 4,
        title: "Cultural Night",
        date: "2025-08-25",
        location: "Auditorium",
        description: "Experience food, music, and traditions from around the world."
    }
];

export default function EventsPage() {
    return (
        <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-2 sm:px-6">
            {/* Header */}
            <Header />
            <Separator className="w-full max-w-6xl mb-8" />

            {/* Hero Section */}
            <section className="w-full max-w-4xl text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-primary">Campus Events</h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Discover, RSVP, and participate in upcoming campus events. Filter by category, date, or organization.
                </p>
            </section>

            {/* Filter/Search UI (UI only) */}
            <section className="w-full max-w-4xl mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex gap-2 w-full sm:w-auto items-center">
                    <Select>
                        <SelectTrigger className="w-full sm:w-auto min-w-[140px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Workshop">Workshop</SelectItem>
                            <SelectItem value="Festival">Festival</SelectItem>
                            <SelectItem value="Career">Career</SelectItem>
                            <SelectItem value="Cultural">Cultural</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" className="w-full sm:w-auto">This Month</Button>
                </div>
            </section>

            {/* Events Grid */}
            <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {events.map(event => (
                    <div key={event.id} className="bg-card rounded-xl shadow border border-border p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow">
                        <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-muted-foreground">{new Date(event.date).toLocaleDateString()}</span>
                            <span className="text-xs text-muted-foreground">{event.location}</span>
                        </div>
                        <h2 className="text-lg font-bold text-primary mb-1">{event.title}</h2>
                        <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                        <Button size="sm" variant="outline" className="mt-auto self-end">View Details</Button>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
