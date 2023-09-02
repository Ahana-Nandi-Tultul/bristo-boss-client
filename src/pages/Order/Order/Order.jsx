import { useState } from 'react';
import img from '../../../assets/shop/banner2.jpg';
import Cover from '../../../shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { useParams } from 'react-router-dom';

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams(); 
    const initailIndex = categories.indexOf(category)              
    const [tabIndex, setTabIndex] = useState(initailIndex)
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    const drinks = menu.filter(item => item.category === "drinks");
    return (
        <div>
            <Cover img={img} title="Order Food"></Cover>
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salads</Tab>
                    <Tab>Pizzas</Tab>          
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>          
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                   <OrderTab items = {salads}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {pizzas}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {soups}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {desserts}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items = {drinks}></OrderTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;