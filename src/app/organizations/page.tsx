
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

const organizations = [
    {
        id: 1,
        name: "Robotics Club",
        description: "Building the future with robotics and automation. Open to all majors.",
        members: 120,
        category: "Technology"
    },
    {
        id: 2,
        name: "Student Government Association",
        description: "Representing student voices and organizing campus-wide initiatives.",
        members: 45,
        category: "Leadership"
    },
    {
        id: 3,
        name: "International Students Society",
        description: "Celebrating cultural diversity and supporting international students.",
        members: 80,
        category: "Cultural"
    },
    {
        id: 4,
        name: "Environmental Action Group",
        description: "Promoting sustainability and environmental awareness on campus.",
        members: 60,
        category: "Environment"
    }
];

export default function OrganizationsPage() {
    return (
        <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-2 sm:px-6">
            {/* Header */}
            <Header />
            <Separator className="w-full max-w-6xl mb-8" />

            {/* Hero Section */}
            <section className="w-full max-w-4xl text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-primary">Student Organizations</h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Connect with student organizations, join communities, and get involved in campus life.
                </p>
            </section>

            {/* Filter/Search UI (UI only) */}
            <section className="w-full max-w-4xl mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <input
                    type="text"
                    placeholder="Search organizations..."
                    className="w-full sm:w-1/2 px-4 py-2 rounded-md border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <div className="flex gap-2 w-full sm:w-auto items-center">
                    <Select>
                        <SelectTrigger className="w-full sm:w-auto min-w-[140px]">
                            <SelectValue placeholder="All Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Categories</SelectItem>
                            <SelectItem value="Technology">Technology</SelectItem>
                            <SelectItem value="Leadership">Leadership</SelectItem>
                            <SelectItem value="Cultural">Cultural</SelectItem>
                            <SelectItem value="Environment">Environment</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button variant="outline" className="w-full sm:w-auto">Most Members</Button>
                </div>
            </section>

            {/* Organizations Grid */}
            <section className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {organizations.map(org => (
                    <div key={org.id} className="bg-card rounded-xl shadow border border-border p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow">
                        <h2 className="text-lg font-bold text-primary mb-1">{org.name}</h2>
                        <span className="text-xs text-muted-foreground mb-1">{org.category}</span>
                        <p className="text-sm text-muted-foreground mb-2">{org.description}</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-xs text-muted-foreground">{org.members} members</span>
                            <Button size="sm" variant="outline">View Profile</Button>
                        </div>
                    </div>
                ))}
            </section>

            <Footer />
        </div>
    );
}
