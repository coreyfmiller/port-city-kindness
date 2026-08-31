import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { Mission } from '@/components/mission'
import { CoreValues } from '@/components/core-values'
import { HowWeHelp } from '@/components/how-we-help'
import { WhoWeHelp } from '@/components/who-we-help'
import { RequestHelp } from '@/components/request-help'
import { GetInvolved } from '@/components/get-involved'
import { CommunityImpact } from '@/components/community-impact'
import { Stories } from '@/components/stories'
import { FinalCta } from '@/components/final-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Mission />
        <CoreValues />
        <HowWeHelp />
        <WhoWeHelp />
        <RequestHelp />
        <GetInvolved />
        <CommunityImpact />
        <Stories />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
