import { Button } from '@/components/shared/ui/button';
import LatestArticles from '@/components/blog/LatestArticles';
import { ComponentDemo } from 'demo/demo';
import { LandingBandSection } from '@/components/landing/LandingBand';
import { LandingFaqSection } from '@/components/landing/LandingFaq';
import { LandingFeatureList } from '@/components/landing/LandingFeatureList';
import { LandingProductFeature } from '@/components/landing/LandingProductFeature';
import { LandingSaleCtaSection } from '@/components/landing/LandingSaleCta';
import { LandingTestimonialListSection } from '@/components/landing/LandingTestimonialList';

import {
  ChromeIcon,
  FigmaIcon,
  FramerIcon,
  GithubIcon,
  LayersIcon,
  LightbulbIcon,
  LineChartIcon,
  SparklesIcon,
  ThumbsUpIcon,
  ZapIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center fancy-overlay">
      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="wide-container">
          <h1 className="text-4xl font-semibold leading-tight md:leading-tight max-w-xs sm:max-w-none md:text-6xl md:max-w-3xl">
            Message sent? Done
          </h1>
          <p className="mt-6 md:text-xl md:max-w-3xl">
            Your straightforward message queue solution, open-source and
            self-hosted on Deno Deploy.
          </p>

          <span className="flex flex-wrap gap-2 mt-6">
            <a href="/signup" target="_blank" rel="noopener noreferrer">
              <Button size="xl">Get Started</Button>
            </a>
          </span>
        </section>
      </div>

      <LandingBandSection
        className="mt-24"
        title="Message Sent? Done."
        description="Your straightforward message queue solution"
        logosComponent={
          <>
            <ChromeIcon className="w-12 h-12" />
            <FigmaIcon className="w-12 h-12" />
            <GithubIcon className="w-12 h-12" />
            <FramerIcon className="w-12 h-12" />
          </>
        }
      />

      <LandingProductFeature
        imagePosition="right"
        imageSrc="/static/images/product-sample.webp"
        imageAlt="Product image"
        title="Open-Source and Self-Hosted"
        description="Experience the power of a message queue solution that is open-source and self-hosted on Deno Deploy. Flexibility and control at your fingertips."
        withBackground
      />

      <LandingFeatureList
        title="Key Features"
        description="Discover the capabilities that set Message Sent apart from the rest."
        featureItems={[
          {
            title: 'Reliable Message Delivery',
            description:
              'Ensure your messages reach their intended destinations every time with our reliable message delivery system.',
            icon: <LayersIcon />,
          },
          {
            title: 'Efficient Queue Management',
            description:
              'Effortlessly manage your message queues, prioritize tasks, and optimize message processing for maximum efficiency.',
            icon: <LineChartIcon />,
          },
          {
            title: 'Robust Error Handling',
            description:
              'Our solution is equipped with advanced error handling mechanisms to minimize disruption and ensure seamless message processing.',
            icon: <SparklesIcon />,
          },
          {
            title: 'Flexible Integration Options',
            description:
              'Integrate Message Sent with your existing infrastructure easily using our flexible and comprehensive integration options.',
            icon: <LightbulbIcon />,
          },
          {
            title: 'Scalable Architecture',
            description:
              'With Message Sent, seamlessly scale your messaging infrastructure to handle any amount of traffic or workload fluctuations.',
            icon: <ZapIcon />,
          },
          {
            title: 'Real-Time Monitoring',
            description:
              'Monitor the performance of your message queues in real-time, gain insights, and make data-driven decisions for improved efficiency.',
            icon: <ThumbsUpIcon />,
          },
        ]}
      />

      <LandingFaqSection
        title="Frequently Asked Questions"
        description="Find answers to some common queries about Message Sent."
        faqItems={[
          {
            question:
              'Can I integrate Message Sent with my existing messaging system?',
            answer:
              'Absolutely! Message Sent offers flexible integration options, allowing you to seamlessly integrate it with your existing infrastructure.',
          },
          {
            question:
              'Is Message Sent suitable for large-scale message processing?',
            answer:
              'Yes, Message Sent is designed to handle high-volume messaging needs efficiently. It offers scalable architecture and robust error handling for seamless large-scale message processing.',
          },
          {
            question:
              'Does Message Sent offer real-time monitoring of message queues?',
            answer:
              "Yes, Message Sent provides real-time monitoring capabilities, empowering you to stay on top of your message queues' performance and make data-driven decisions.",
          },
        ]}
        withBackground
      />

      <LandingTestimonialListSection
        title="What Our Customers Say"
        description="See how Message Sent has helped businesses streamline their messaging workflows and achieve greater success."
        testimonialItems={[
          {
            name: 'John Smith',
            text: "Message Sent has revolutionized how we handle communication within our organization. It's efficient, reliable, and has saved us countless hours.",
            handle: '@john_smith',
            imageUrl: 'https://picsum.photos/800/400?random=1',
            url: '#',
            size: 'full',
          },
          {
            name: 'Emily Johnson',
            text: "I was skeptical at first, but Message Sent has exceeded my expectations. It's been a game-changer for our company.",
            handle: '@emily_johnson',
            imageUrl: 'https://picsum.photos/800/400?random=2',
            url: '#',
            size: 'half',
          },
          {
            name: 'Michael Thompson',
            text: 'Since implementing Message Sent, our message delivery has become more efficient, and our customers have noticed the difference. Highly recommended.',
            handle: '@michael_thompson',
            imageUrl: 'https://picsum.photos/800/400?random=3',
            url: '#',
            size: 'half',
          },
        ]}
      />

      <LandingSaleCtaSection
        title="Get Started Today"
        description="Take advantage of the power of Message Sent and supercharge your messaging capabilities. Sign up now!"
        ctaHref={'#'}
        ctaLabel={'Pre-order now'}
        withBackground
      />

      <section className="wide-container mt-12">
        <LatestArticles />
      </section>

      <div className="w-full flex flex-col items-center gap-8 md:gap-16">
        <section className="ultrawide-container">
          <ComponentDemo />
        </section>
      </div>
    </div>
  );
}
