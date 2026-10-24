import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import AnimateOnScroll from '@/components/motion/AnimateOnScroll';

export default function HomeFeaturedTreatments() {
  return (
    <section className="relative z-20 w-full bg-paper py-20 md:py-32 border-t border-mist overflow-hidden">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <AnimateOnScroll animation="fade-up" duration={0.8} className="mb-16">
          <span className="font-body text-13 text-[#172B45] block mb-2 font-medium uppercase tracking-wider">Serviços de Climatização</span>
          <h2 className="font-display text-33 md:text-41 text-[#172B45]">Soluções para climatização, refrigeração e elétrica</h2>
        </AnimateOnScroll>
        <div className="flex flex-col space-y-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6 order-2 lg:order-1">
              <span className="font-body text-13 text-[#172B45] uppercase tracking-wider block mb-2 font-medium">Climatização</span>
              <h3 className="font-display text-26 md:text-33 text-[#172B45] mb-4">Conte o que você precisa</h3>
              <p className="font-body text-15 md:text-17 text-[#172B45]/80 leading-relaxed mb-6">Fale com a PH Soluções Inteligentes sobre instalação, limpeza, manutenção ou reparo do seu equipamento.</p>
              <div className="p-4 bg-[#F3F7FC] border-l-4 border-[#075FE4] mb-6 rounded-sm"><span className="font-body text-13 text-[#172B45]/80"><strong className="text-[#172B45] font-semibold">Antes de começar:</strong> O serviço e o orçamento são combinados com você.</span></div>
              <Button href="/manutencao-e-conserto-de-ar-condicionado/" variant="ghost" size="md">Ver serviços de ar-condicionado</Button>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-repair.jpg" alt="Serviço técnico" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-top" /></div>
            </AnimateOnScroll>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <AnimateOnScroll animation="fade-right" duration={0.9} className="lg:col-span-6"><div className="relative aspect-[4/3] bg-mist overflow-hidden border border-mist shadow-sm"><Image src="/images/plumbing-pipes.jpg" alt="Tubulações e instalações" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div></AnimateOnScroll>
            <AnimateOnScroll animation="fade-left" duration={0.9} className="lg:col-span-6">
              <span className="font-body text-13 text-[#172B45] uppercase tracking-wider block mb-2 font-medium">Aquecedores e caldeiras</span>
              <h3 className="font-display text-26 md:text-33 text-[#172B45] mb-4">Aquecedores e caldeiras options for your property</h3>
              <p className="font-body text-15 md:text-17 text-[#172B45]/80 leading-relaxed mb-6">Converse sobre manutenção de aquecedores, caldeiras e equipamentos comerciais.</p>
              <div className="p-4 bg-[#F3F7FC] border-l-4 border-[#075FE4] mb-6 rounded-sm"><span className="font-body text-13 text-[#172B45]/80"><strong className="text-[#172B45] font-semibold">Conte o que você precisa:</strong> A equipe explica o serviço e os próximos passos.</span></div>
              <Button href="/caldeiras-e-aquecedores/" variant="ghost" size="md">Ver serviços elétricos</Button>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
