import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
    return (
        <div className="font-sans min-h-screen bg-background text-foreground flex flex-col items-center px-4 sm:px-8">
            <Header />
            <Separator className="w-full max-w-6xl mb-8" />
            {/* Hero Section */}
            <section className="w-full max-w-3xl text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-primary">Contact Us</h1>
                <p className="text-base sm:text-lg text-muted-foreground mb-4">
                    Have a question, suggestion, or want to partner with Campus Event Hub? Fill out the form below or email us at <a href="mailto:info@campuseventhub.com" className="text-primary underline">info@campuseventhub.com</a>.
                </p>
            </section>
            {/* Contact Form (UI only) */}
            <section className="w-full max-w-2xl mb-10">
                <form className="bg-card rounded-xl shadow border border-border p-8 flex flex-col gap-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1">Name</label>
                        <input id="name" name="name" type="text" required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-1">Email</label>
                        <input id="email" name="email" type="email" required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1">Message</label>
                        <textarea id="message" name="message" rows={5} required className="w-full px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <button type="submit" className="bg-primary text-background font-semibold rounded-md px-6 py-2 hover:bg-primary/90 transition-colors">Send Message</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}
