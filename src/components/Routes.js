import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './common/Layout';
import Test1 from './Test/Test1';
import Test2 from './Test/Test2';



export default () => (
    <Layout>
        <Switch>
            <Route exact path='/' component={Test1} />
            <Route exact path='/test2' component={Test2} />          
        </Switch>
    </Layout>

);
