import BlogDetail from '../../components/blog/BlogDetail'
import Layout from '../../components/layout/Layout'

import { getBlogDetails } from '../../redux/actions/blogActions'

import { wrapper } from '../../redux/store'

export default function BlogDetailsPage() {
    return (
        <Layout>
            <BlogDetail title='Infromacje' />
        </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
    await store.dispatch(getBlogDetails(req, params.id))
})
