import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
    return (
        <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8">
            <Header />
            <Separator className="w-full max-w-6xl mb-8" />
            {/* Hero Section */}
            <section className="w-full max-w-3xl text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-primary">About Campus Event Hub</h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Campus Event Hub is a centralized platform designed to transform how university communities discover, create, and participate in campus events. Our mission is to foster engagement, collaboration, and community building by making event information accessible and actionable for everyone on campus.
                </p>
            </section>
            {/* About Content */}
            <section className="w-full max-w-2xl mb-10 text-foreground">
                <h2 className="text-2xl font-semibold mb-4 text-primary">Our Vision</h2>
                <p className="mb-6 text-muted-foreground">
                    We believe that vibrant campus life is built on meaningful connections and shared experiences. Campus Event Hub empowers students, organizations, and universities to create, manage, and promote events with ease, ensuring that no opportunity for engagement is missed.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-primary">What We Offer</h2>
                <ul className="list-disc list-inside mb-6 text-foreground">
                    <li>Centralized event discovery and management</li>
                    <li>Personalized recommendations and notifications</li>
                    <li>Tools for organizations to grow their communities</li>
                    <li>Real-time engagement features like RSVPs and comments</li>
                    <li>Inclusive, accessible, and user-friendly design</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Meet the Team</h2>
                <p className="mb-6 text-muted-foreground">
                    Campus Event Hub is developed by a passionate team of students, alumni, and technologists who understand the unique needs of campus communities. We are committed to continuous improvement and welcome your feedback!
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground">
                    Have questions, suggestions, or want to partner with us? Reach out at <a href="mailto:info@campuseventhub.com" className="text-primary underline">info@campuseventhub.com</a>.
                </p>
            </section>
            <Footer />
        </div>
    );
}
