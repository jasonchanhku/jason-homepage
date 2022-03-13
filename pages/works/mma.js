import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="UFC MMA Predictor">
    <Container>
      <Title>
        UFC MMA Predictor <Badge>2018-</Badge>
      </Title>
      <P>
                As a Data Scientist and Ultimate Fighting Championship (UFC) fan, there was no way
                that I wasn&apos;t going to build the world&apos;s first UFC MMA predictor. I built this web application
                in late 2018 while waiting for my new job to start at that time. I sourced the data on fighters
                and UFC fights from public sources and scrapped all the data using a container service that stores
                it in a sqlite3 database. The predictor is estimated to have an accuracy of 70.4%, better than
                random guess and picking favourite only!
      </P>
      <P>
                Per the results from Google Analytics, my web application receives over
                200 views per month. Most users are from the U.S and Canada. I have also
                noticed an increasing amount of citations in academia from my work. Thanks for all your support and
                glad to have inspired some of you!
      </P>
      <List ml={5} my={5}>
      <ListItem>
      <Meta>Website</Meta>
      <Link href="https://ufcmmapredictor.herokuapp.com/" target="_blank">
       https://ufcmmapredictor.herokuapp.com/{' '}
       <ExternalLinkIcon mx="2px" />
      </Link>
        </ListItem>
        <ListItem>
        <Meta>Platform</Meta>
        <span>Web application deployed on Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>GitHub Repo</Meta>
          <Link href="https://github.com/jasonchanhku/UFC-MMA-Predictor" target="_blank">
            UFC MMA Predictor{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Python, Dash, sqlite3, morph.io (containerized web scrappper)</span>
        </ListItem>
        <ListItem>
          <Meta>Data Analysis & Modelling</Meta>
           <Link href="https://nbviewer.org/github/jasonchanhku/UFC-MMA-Predictor/blob/master/UFC%20MMA%20Predictor%20Workflow.ipynb" target="_blank">
           Jupyter Notebook {' '}
           <ExternalLinkIcon mx="2px" />
           </Link>
         </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://medium.com/plotly/7-of-the-dash-communitys-latest-creations-ed4f53e0b1fa" target="_blank">
            <Badge mr={2}>Plotly</Badge>
            7 of the dash&apos;s community latest creation
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Link href="https://towardsdatascience.com/my-top-5-visualization-tools-for-data-science-45a4968ae695" target="_blank">
            <Badge mr={2}>Zeming Yu</Badge>
             My top 5 visualization tools for data science
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
      <Center>Screenshots</Center>
      </Heading>

      {/*
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid>
     */}

      <WorkImage src="/images/works/mma.gif" alt="mma" />
            <P>
                Usage of the web application. Select fighters from weight class and then click predict.
            </P>

      <WorkImage src="/images/works/mma_01.png" alt="walknote" />
            <P>
                Example fight prediction of the headline main event of UFC217 between GSP and Michael Bisping. GSP went on to actually win the fight.
            </P>


    </Container>
  </Layout>
)

export default Work
