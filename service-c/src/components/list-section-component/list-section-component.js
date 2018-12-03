import React,  {Component } from 'react';
import './list-section-component.css';
import { Table } from 'react-bootstrap';
import Pagination from 'react-js-pagination';
class ListSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            page: 1,
            isLoading: false,
            error: null,
        };
        this.changePage = this.changePage.bind(this);
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(data => this.setState({ posts: data, isLoading: false }))
            .catch(error => this.setState({ error, isLoading: false }));
    }

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    changePage(page) {
        this.setState({ page: page });
    }
    render() {
        const { posts, page, isLoading, error } = this.state;

        //pagination
        const per_page = 5;
        const start_offset = (page - 1) * per_page;
        let start_count = 0;
        if (error) {
            return <p>{error.message}</p>;
        }

        if (isLoading) {
            return (
                <div className="service-c-section" >
                    <div className="content" >
                    </div>
                </div>);
        }

        return (
            <div className="service-c-section" >
                <div className="content" >
                    <h3>List of items with pagination</h3>
                    <Table style={{ textAlign: 'center' }}>
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">User Id</th>
                                <th scope="col">Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => {
                                if (index >= start_offset && start_count < per_page) {
                                    start_count++;
                                    return (<tr key={post.id}>
                                        <th scope="row">{post.id}</th>
                                        <td >{post.userId}</td>
                                        <td style={{ textAlign: 'left' }}>{post.title}</td>
                                    </tr>)
                                }
                            }
                            )}
                        </tbody>
                    </Table>

                    <div style={{ textAlign: 'center' }}>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={per_page}
                            totalItemsCount={posts.length}
                            pageRangeDisplayed={3}
                            onChange={this.changePage}
                        />
                    </div>

                </div>
            </div>
        );

    }
}

export default ListSection;