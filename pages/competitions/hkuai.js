import { Container, Badge, Link, List, ListItem, Heading, UnorderedList, Center } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="HKU AI Competition">
    <Container>
      <Title>
       HKU AI Robotics Vision Competition <Badge>2021</Badge> <Badge>Winner</Badge>
      </Title>
      <P>
                HKU SAAS Data Science Lab organized this competition to promote development of artificial intelligence (AI)
                robotics vision and automation technologies at the school level and the industry level. The competition encourages students and companies to develop innovative AI robotics solutions with AI,
                data science and statistical tools for solving current hot topics/problems in robotics vision and automation. The competition
                also serves as a platform for local secondary schools, institutions, and industries to share knowledge, innovation and
                experience on the application of AI robotics technologies for solving business problems, enhancing businesses&apos;
                competitiveness, and creating business insights for industries in social science, smart city, healthcare, education,
                and Internet of Things (IoT).
      </P>
      <P>
                I was the team leader and lead coder of our group which developed the solution Artificial Intelligence Video Interview Analyzer (AVIA). AVIA
                is an AI web application that aims to help students practice for online interviews and assessments as part of the digital transformation
                caused by COVID-19. The web application uses face detection, facial expression prediction, eye gaze tracking, and sentiment analysis to
                compute the students&apos; scores when using AVIA. The detailed breakdown of the scores are available in a elegantly summarized dashboard where
                students can pinpoint their weaknesses during the interview assessment.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Solution</Meta>
                    <Link href="https://nbviewer.org/github/jasonchanhku/jasonchanjinan/blob/master/public/STAT8021_AVIA.pdf" target="_blank">
           Artificial Intelligence Video Interview Analyzer (AVIA) <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web application</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Streamlit, OpenCV</span>
        </ListItem>
        <ListItem>
          <Meta>ML Libraries</Meta>
          <span>Tensorflow, Keras, spaCy, Textblob</span>
        </ListItem>
      </List>

    <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
    </Heading>

    <UnorderedList my={4}>
        <ListItem>
            <Link href="https://nbviewer.org/github/jasonchanhku/jasonchanjinan/blob/master/public/hku_article.pdf" target="_blank">
                <Badge mr={2}>HKU Newsletter</Badge>
    The Winning Teams of the AI Robotics Vision and Automation Technology Challenges
    Competition 2021 organised by HKU SAAS Data Science Lab
    <ExternalLinkIcon mx="2px" />
            </Link>
        </ListItem>
    </UnorderedList>

    <Heading as="h4" fontSize={16} my={6}>
        <Center>AVIA Screenshots</Center>
    </Heading>

      <WorkImage src="/images/competitions/jason_chan_avia.gif" alt="AVIA Demo" />
      <WorkImage src="/images/competitions/inkdrop_02.png" alt="Inkdrop" />

    <Heading as="h4" fontSize={16} my={6}>
        <Center>Award Ceremony</Center>
    </Heading>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />

    </Container>
  </Layout>
)

export default Work
