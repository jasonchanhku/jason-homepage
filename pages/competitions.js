import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { CompetitionsGridItem } from '../components/grid-item'

import thumbInkdrop from '../public/images/competitions/inkdrop_eyecatch.png'
import thumbWalknote from '../public/images/competitions/walknote_eyecatch.png'
import thumbFourPainters from '../public/images/competitions/the-four-painters_eyecatch.jpg'
import thumbMenkiki from '../public/images/competitions/menkiki_eyecatch.png'
import thumbModeTokyo from '../public/images/competitions/modetokyo_eyecatch.png'
import thumbStyly from '../public/images/competitions/styly_eyecatch.png'
import thumbPichu2 from '../public/images/competitions/pichu2_eyecatch.png'
import thumbFreeDBTagger from '../public/images/competitions/freedbtagger_eyecatch.png'
import thumbAmembo from '../public/images/competitions/amembo_eyecatch.png'

const Competitions = () => (
    <Layout title="Competitions">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
       Competitions
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <CompetitionsGridItem id="inkdrop" title="HKU AI Robotics Vision Competition" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </CompetitionsGridItem>
        </Section>
        <Section>
          <CompetitionsGridItem
            id="walknote"
            title="walknote"
            thumbnail={thumbWalknote}
          >
            Music recommendation app for iOS
          </CompetitionsGridItem>
        </Section>

        <Section delay={0.1}>
          <CompetitionsGridItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </CompetitionsGridItem>
        </Section>
        <Section delay={0.1}>
          <CompetitionsGridItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
          </CompetitionsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <CompetitionsGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </CompetitionsGridItem>
        </Section>
        <Section delay={0.3}>
          <CompetitionsGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </CompetitionsGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old competitions
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <CompetitionsGridItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </CompetitionsGridItem>
        </Section>
        <Section delay={0.5}>
          <CompetitionsGridItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </CompetitionsGridItem>
        </Section>
        <Section delay={0.6}>
          <CompetitionsGridItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
          </CompetitionsGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Competitions
