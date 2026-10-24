import React from 'react';
import Image from 'next/image';
import MediaParallax from '@/components/motion/MediaParallax';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

const REASONS = [
  {
    title: 'Conversa clara',
    description: 'Converse diretamente com a equipe sobre o serviço de que precisa.',
  },
  {
    title: 'Alinhe o serviço',
    description: 'Converse sobre o prazo e o escopo do serviço para seu imóvel.',
  },
  {
    title: 'Planeje os próximos passos',
    description: 'Converse sobre o serviço, o orçamento e os próximos passos antes de decidir.',
  },
  {
    title: 'Serviços para residências e empresas',
    description: 'A equipe pode conversar sobre climatização, refrigeração, elétrica, bombas, aquecedores e equipamentos comerciais.',
  },
];

export default function HomeWhyUs() {
  return (
    <section className="relative z-20 w-full bg-paper py-16 md:py-24 lg:py-32 overflow-hidden border-t border-mist">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Columns 1–6: Left-Aligned Editorial Reasons List */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-right" duration={0.85}>
              <span className="font-body text-13 text-forest-ink/60 block mb-2 font-medium uppercase tracking-wider">
                Nosso jeito de trabalhar
              </span>
              <h2 className="font-display text-26 sm:text-33 md:text-41 text-forest-ink mb-8 md:mb-10 leading-tight">
                Serviços de Climatização for your property
              </h2>

              <div className="divide-y divide-mist">
                {REASONS.map((reason, idx) => (
                  <AnimateOnScroll
                    key={reason.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                    className="py-5 sm:py-6 first:pt-0 last:pb-0"
                  >
                    <h3 className="font-display text-17 sm:text-21 text-forest-ink mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-body text-15 text-forest-ink/80 leading-relaxed">
                      {reason.description}
                    </p>
                  </AnimateOnScroll>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Imagens de serviços técnicos */}
          <div className="lg:col-span-6">
            <AnimateOnScroll animation="fade-left" duration={0.85}>
              <div className="grid grid-cols-2 gap-3">
                {/* Main large image */}
                <div className="col-span-2 relative aspect-[16/10] bg-mist overflow-hidden border border-mist shadow-sm">
                  <MediaParallax speed={0.06} className="w-full h-full">
                    <Image
                    src="/images/plumbing-technician.jpg"
                    alt="Serviço técnico em andamento"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </MediaParallax>
                  <div className="absolute bottom-3 left-3 bg-[#172B45]/90 backdrop-blur-sm text-paper font-body text-12 px-3 py-1 font-medium">
                    Serviços de refrigeração e elétrica
                  </div>
                </div>
                {/* Mais imagens de serviços */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-mist overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/plumbing-repair.jpg"
                    alt="Serviço técnico"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {/* Detalhes do serviço */}
                <div className="col-span-2 sm:col-span-1 relative aspect-square bg-[#F3F7FC] overflow-hidden border border-mist shadow-sm">
                  <Image
                    src="/images/plumbing-pipes.jpg"
                    alt="Tubulações e instalações project"
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-[#172B45]/80 text-paper font-body text-12 px-3 py-2 text-center">
                     Climatizaçãos
                  </div>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
