export default function ServicesSection() {
  return (
    <section id="services" className="w-full justify-center">

      <h2>Consulting</h2>

      <div className="service-list">
        <div>
          <img src="product_dev.jpg" />
            <h3>
              Product Development
            </h3>
            <p>
              From concept to launch, I guide you through the full product lifecycle. Whether building from scratch or enhancing existing solutions, I ensure scalable, high-performing, and user-centric products.         
            </p>
        </div>

        <div>
          <img src="code_audit.jpg" />
            <h3>
              Technical Audit
            </h3>
              <p>Assess and optimize your software development processes, code quality, and team performance.</p>
              <p>
                
                I provide in-depth technical audits and best-practice recommendations to enhance efficiency and maintainability.
            </p>
        </div>

        <div>
          <img src="strategy.jpg" />
            <h3>
              Digital Strategy
            </h3>
            <p>
              Align technology with business goals through structured requirements and strategic planning.</p>
              <p>I help define clear technical roadmaps, ensuring your digital initiatives are well-architected and built for success.
            </p>
        </div>

        <div>
          <img src="ai_brain.jpg" />
            <h3>
              AI & Data Solutions
            </h3>
            <p>
              Develop and optimize AI models tailored to your industry needs. From domain-specific machine learning solutions to data strategy and implementation, I help you leverage AI to drive automation, decision-making, and innovation.
            </p>
        </div>
      </div>
    </section>
  );
}