import HeroSection from './homepage/components/HeroSection';
import RoleCards from './homepage/components/RoleCards';
import ArtworksSection from './homepage/components/ArtworksSection';
import SocialLinksSection from './homepage/components/SocialLinksSection';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <RoleCards />
      <ArtworksSection />
      <SocialLinksSection />
    </div>
  );
}
