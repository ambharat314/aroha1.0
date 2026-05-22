import { motion } from "motion/react";
import { Link } from "react-router";
import { Building2, GraduationCap, HeartHandshake, Quote } from "lucide-react";

export default function Organisations() {
  const orgTypes = [
    {
      title: "Corporates",
      intro: "Cultivating mindful cultures, resilient teams, and creative thinking through expressive arts.",
      whoIsItFor: "For employees, clients, and leadership seeking creative approaches to wellbeing, team cohesion, and innovation.",
      color: "#8E270E",
      icon: Building2,
      benefits: [
        "Fosters psychological safety and team trust",
        "Enhances authentic communication and reduces conflict",
        "Provides effective somatic tools for burnout prevention and stress management",
        "Unlocks creative problem-solving and lateral thinking capacities"
      ],
      formats: ["Leadership Retreats", "Team Building Offsites", "Wellbeing Workshops", "Ongoing Employee Wellness Programs"],
      testimonials: [
        {
          quote: "Vasvi’s Art-based Journaling sessions were a profound and emotional journey of self-discovery. Through the gentle power of art and reflection, participants explored their inner worlds uncovering personal barriers, reconnecting with their authentic selves, and finding healing in expression. Many shared heartfelt stories of survival and moments of realization as they discovered what had been holding them back. The sessions beautifully captured the essence of the Self-Discovery track at Learnfinity, leaving participants with a deeper understanding of themselves and a renewed sense of clarity and strength.",
          author: "Aditi Shukla",
          role: "Senior Associate - Learning & Talent Development",
          company: "Publicis Sapient"
        }
      ]
    },
    {
      title: "Education",
      intro: "Nurturing emotional literacy, stress management, and self-expression in academic ecosystems.",
      whoIsItFor: "For students, staff, and faculty looking to integrate creative expression into learning and community building.",
      color: "#F1B75F",
      icon: GraduationCap,
      benefits: [
        "Provides a safe, non-judgmental outlet for academic stress",
        "Encourages emotional intelligence and interpersonal growth",
        "Helps students build meaningful peer support networks",
        "Promotes a culture of holistic student mental health and resilience"
      ],
      formats: ["Student Well-being Circles", "Faculty Retreats", "Orientation Ice-breakers", "Exam Stress Decompression Workshops"],
      testimonials: [
        {
          quote: "This session made me realise what I actually am, my thought process etc. and through the exchange of peers' stories it gave me a different perspective of looking and dealing with situations of life. I also got hope I am not alone in the world which we may feel many times in case of depression, sadness.",
          author: "Student",
          role: "Campus Workshop",
          company: "IIIT-D (New Delhi)"
        },
        {
          quote: "I realized we needed such safe, non-judgemental, therapeutic spaces more often. Especially in a place like Jindal where we are so consumed with work, a place like this helped me be in the present and enjoy, feel and connect with my thoughts and that of others. It just helped us heal and gave a little bit hope, that there are people there who can understand us.",
          author: "Student",
          role: "Mental Health Workshop",
          company: "O.P. Jindal Global University (Sonipat)"
        },
        {
          quote: "This session was a very calming, therapeutic experience. I feel a lot more peaceful after this!",
          author: "Student",
          role: "Wellbeing Session",
          company: "IISER Bhopal"
        }
      ]
    },
    {
      title: "Social Impact",
      intro: "Empowering caregivers, change-makers, and vulnerable communities through trauma-informed creative tools.",
      whoIsItFor: "For the communities being served and for organizational employees and staff supporting social change.",
      color: "#798C6C",
      icon: HeartHandshake,
      benefits: [
        "Restores agency and emotional processing for vulnerable groups",
        "Supports social workers and caregivers processing vicarious trauma",
        "Strengthens community bonding and shared social cohesion",
        "Offers culturally adaptable and highly accessible therapeutic modalities"
      ],
      formats: ["Caregiver Support Circles", "NGO Team Well-being Offsites", "Community Arts Facilitation", "Trauma-Informed Art Programs"],
      testimonials: [
        {
          quote: "Vasvi's 'Expressive Arts Based Wellbeing' was an excellent session at our ILSS offsite that helped us dig deeper into some of our core values and belief systems as individuals and as a team. Through arts-based conversations and dialogues, Vasvi helped us connect and engage with one another in a profound way. This will have long-term benefits in how we relate to one another and how we work as a team. Vasvi is an extremely skilled and knowledgeable facilitator that enabled her to understand our needs, and design and deliver a customized solution for us.",
          author: "Rajneesh Chowdhury, Ph.D.",
          role: "Head of Leadership Development",
          company: "India Leaders for Social Sector (ILSS)"
        },
        {
          quote: "Our team members found the session to be a great way to loosen up, express freely and relax and unwind. They were able to gain clarity on their inner workings at the moment, able to identify their inner strengths and resources, how they are contributing to each other in a team, explored parts of them they had not visited in sometime and unpack its current connection to their life and most importantly they really enjoyed the experience of engaging with art materials after a really long time. Vasvi spent a lot of time understanding our needs and figuring out with us how our team members could best use expressive arts as a tool for exploring their inner landscape, both their inner resources and needs. She asked us the right questions and accommodated our inputs. She could seamlessly engage a group of 80 people and guide through and hold them through the process.",
          author: "Kanika Saraff",
          role: "Head - Policy, Advocacy and Communications",
          company: "Aangan Trust"
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Organisations</h1>
          <p className="text-2xl text-[#F1B75F]/85 font-light italic">
            Expressive arts programs for teams, institutions and communities
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-24 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto space-y-24">
          {orgTypes.map((org, index) => {
            const IconComponent = org.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-16 rounded-[2rem] shadow-xl border border-stone-100 grid md:grid-cols-12 gap-12 items-start relative overflow-hidden"
              >
                {/* Decorative Side Highlight */}
                <div
                  className="absolute top-0 left-0 w-2 h-full"
                  style={{ backgroundColor: org.color }}
                />

                {/* Left Column: Details (8 cols on large screens) */}
                <div className="md:col-span-7 space-y-8">
                  <div className="flex items-center gap-4">
                    <div
                      className="p-4 rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: org.color }}
                    >
                      <IconComponent size={28} />
                    </div>
                    <h2 className="text-4xl md:text-5xl text-stone-800 font-light tracking-wide">{org.title}</h2>
                  </div>

                  <p className="text-xl text-stone-600 leading-relaxed font-light italic">
                    {org.intro}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl text-stone-800 font-medium tracking-wide">Who is it for?</h3>
                    <p className="text-lg text-stone-600 leading-relaxed font-light">
                      {org.whoIsItFor}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl text-stone-800 font-medium tracking-wide">Key Benefits</h3>
                    <ul className="space-y-3">
                      {org.benefits.map((benefit, bIndex) => (
                        <li key={bIndex} className="flex items-start gap-3 text-stone-600 text-lg">
                          <span className="inline-block w-2 h-2 rounded-full mt-2" style={{ backgroundColor: org.color }} />
                          <span className="font-light">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl text-stone-800 font-medium tracking-wide">Available Formats</h3>
                    <div className="flex flex-wrap gap-3">
                      {org.formats.map((format, fIndex) => (
                        <span
                          key={fIndex}
                          className="px-5 py-2.5 bg-stone-50 border border-stone-200 text-stone-700 text-sm font-medium rounded-full shadow-sm hover:shadow transition-shadow"
                        >
                          {format}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Testimonials (5 cols on large screens) */}
                <div className="md:col-span-5 h-full flex flex-col justify-center">
                  <div className="bg-stone-50/70 p-8 md:p-10 rounded-3xl border border-stone-200/50 shadow-inner relative flex flex-col h-full justify-between">
                    <Quote size={48} className="absolute -top-6 -right-2 text-stone-200 rotate-180 opacity-60" />
                    
                    <div className="space-y-8">
                      <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-stone-400">
                        {org.testimonials.length > 1 ? "Client Testimonials" : "Featured Testimonial"}
                      </h4>
                      
                      <div className="space-y-8 divide-y divide-stone-200/65">
                        {org.testimonials.map((t, tIndex) => (
                          <div key={tIndex} className={`${tIndex > 0 ? "pt-6" : ""}`}>
                            <p className="text-stone-600 leading-relaxed italic text-[15px] md:text-[16px] mb-6">
                              "{t.quote}"
                            </p>
                            <div className="flex items-center gap-3">
                              <div
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm shadow-md"
                                style={{ backgroundColor: org.color }}
                              >
                                {t.author[0]}
                              </div>
                              <div>
                                <p className="text-stone-800 font-semibold text-sm leading-tight">{t.author}</p>
                                <p className="text-stone-500 text-xs mt-0.5 leading-snug">
                                  {t.role}
                                </p>
                                <p className="text-stone-400 text-xs leading-none mt-0.5 font-medium">
                                  {t.company}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-xl text-stone-600 mb-8 font-light max-w-xl mx-auto">
            Ready to bring custom expressive arts wellbeing programs to your team or institution?
          </p>
          <Link
            to="/home/contact"
            className="inline-block px-12 py-5 bg-[#8E270E] text-white rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl font-medium tracking-wide text-lg"
          >
            Partner With Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
