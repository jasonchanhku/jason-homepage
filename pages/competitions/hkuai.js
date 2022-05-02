import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
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
        HKU SAAS Data Science Lab of the Department of Statistics & Actuarial Science, The University of Hong Kong organized this
        competition is to promote development of artificial intelligence (AI) robotics vision and automation technologies at the school level
        and the industry level. The competition encourages students and companies to develop innovative AI robotics solutions with AI,
        data science and statistical tools for solving current hot topics/problems in robotics vision and automation. The competition
        also serves as a platform for local secondary schools, institutions, and industries to share knowledge, innovation and
        experience on the application of AI robotics technologies for solving business problems, enhancing businesses’
        competitiveness, and creating business insights for industries in social science, smart city, healthcare, education,
        and Internet of Things (IoT).
      </P>
      <P>
        I was the team leader and lead coder of our group which developed 
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.inkdrop.app/">
            https://www.inkdrop.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NodeJS, Electron, React Native</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820">
            How I’ve Attracted The First 500 Paid Users For My SaaS That Costs
            $5/mo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/inkdrop_01.png" alt="Inkdrop" />
      <WorkImage src="/images/works/inkdrop_02.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
