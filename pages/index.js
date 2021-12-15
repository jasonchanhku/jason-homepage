import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Image,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoLinkedin

} from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
      >
        Hello, I&apos;m a Data Scientist based in Hong Kong!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jason Chan Jin An
          </Heading>
          <p>Data Scientist ( Part Time MSCS Student / Guitarist / UFC Fan / John Mayer Fan )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/jasonchan.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About Myself
        </Heading>
        <Paragraph>
          
          I am a fellow Malaysian based in Hong Kong and working as a Data Scientist with 
          a passion for using data to build impactful and interesting AI applications. Some of 
          my projects include building a UFC MMA fight predictor, Glassdoor Data Scientist 
          Analyzer, and AI Video Interview Analyzer (AVIA), which won the 2021 HKU AI Robotics Vision 
          Competition. When not doing Data Science-y stuff, I enjoy playing guitar, both electric
          and acoustic and covering John Mayer songs (the blues stuff, not the pop). I am also an
          avid Ultimate Fighting Championship (UFC) fan and have watched a few live events. Currently, 
          he is living off of his own
          product called{' '}
          <NextLink href="/works/inkdrop">
            <Link>Inkdrop</Link>
          </NextLink>
          .
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Work Experience
        </Heading>
        <BioSection>
          <BioYear>2016 - 2018, Fidelity International</BioYear>
          <p>
          Worked at Fidelity International as a Junior Data Scientist in the
          Customer Insights and Analytics team.
          </p>
        </BioSection>
        <BioSection>
          <BioYear>2019 - Present, China Light & Power (CLP)</BioYear>
          <p>
          Working as a Data Scientist at China Light & Power (CLP) Holdings 
          in the Big Data and AI team.
          </p>
        </BioSection>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Education
        </Heading>
        <BioSection>
          <BioYear>2012 - 2012, Tunku Abdul Rahman University (UTAR)</BioYear>
          <p>
          Completed A-Levels in Kuala Lumpur Malaysia and enrolled in
          BSc Actuarial Science in Tunku Abdul Rahman University (UTAR) for 
          2 semesters. Withdraw upon obtaining a scholarship to The University 
          of Hong Kong (HKU).
          </p>
        </BioSection>
        <BioSection>
          <BioYear>2012 - 2016, University of Hong Kong (HKU)</BioYear>
          <p>
          Completed the BSc Quantitative Finance program at HKU. This program
          equipped me with fundamentals in mathematics, statistics, computer 
          science, and finance.
          </p>
        </BioSection>
        <BioSection>
          <BioYear>2019 - 2021, University of Hong Kong (HKU)</BioYear>
          <p>
          Completed the MSc Statistics, Data Analytics program at HKU. My final
          project is Applying Deep Learning Algorithms in Prostate Cancer
          Predictions from Scanned Images.
          </p>
        </BioSection>
        <BioSection>
          <BioYear>2021 - Present, University of Austin at Texas</BioYear>
          <p>
          Currently enrolled in MSc Computer Science program (MSCSO) at
          UT Austin.
          </p>
        </BioSection>
      </Section>


      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Competitions
        </Heading>
        <BioSection>
          <BioYear>2019 - China Southern Grid AI Competition (Rank 10)</BioYear>
          <p>
          Represented my company China Light & Power Holdings (CLP) in a team of 3 to take part in this AI competition. The
          aim of the competition is to build models for short term load forecast of 4 provinces in China. We competed against 38 teams
          consisting of famous tech companies such as TenCent and Alibaba and top universities such as HKU, HKUST, PKU, and Tsinghua University.
          </p>
        </BioSection>
        <BioSection>
          <BioYear>2021 - HKU AI Robotics Vision and Automation Technology Competition (Winner) </BioYear>
          <p>
          Lead coder and team leader of winning team. The competition was to build an AI application that includes computer vision and
          text analytics. Our team built an AI application called AI Video Interview Analyzer (AVIA), an AI application that helps students prepare
          for online interviews. We implemented facial expression recognition, eye contact detection, and text analytics in the application. 
          </p>
        </BioSection>
      </Section>
      
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          My Interests
        </Heading>
        <Paragraph>
          Data Science, Statistics, Machine Learning, Deep Learning, Computer Vision, 
          Blues Music, Mixed Martial Arts, Manchester United 
        </Paragraph>
      </Section>
 

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/jasonchanhku" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @jasonchanhku
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/inkdrop_app" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @inkdrop_app
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://instagram.com/craftzdog" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoInstagram} />}
              >
                @craftzdog
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/jason-chan-jin-an-45a76a76/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/devaslife"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            My YouTube channel
          </GridItem>
          <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/posts">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              Popular posts
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
