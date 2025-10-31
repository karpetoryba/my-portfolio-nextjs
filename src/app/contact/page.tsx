export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">Contact</h1>
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-lg leading-relaxed">
              I'd love to hear from you! Whether you have a project in mind, a question, 
              or just want to connect, feel free to reach out.
            </p>
          </div>

          <div className="space-y-6 pt-8 border-t border-neutral-300">
            <div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg text-neutral-600">your.email@example.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <p className="text-lg text-neutral-600">linkedin.com/in/yourprofile</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <p className="text-lg text-neutral-600">github.com/yourusername</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-300">
          <h2 className="text-2xl font-semibold mb-4">Send a Message</h2>
          <p className="text-lg text-neutral-600">
            You can reach me through any of the channels above. I typically respond 
            within 24-48 hours.
          </p>
        </div>
      </div>
    </main>
  );
}

