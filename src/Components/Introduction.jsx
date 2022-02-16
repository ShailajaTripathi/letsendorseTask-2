import React, {useState}from "react";
import "./form.css";

import {
  Form,
  Button,
  Checkbox,
  Input,
  Select,
  InputNumber,
} from "antd";


function Introduction() {

  const [name, setName]= useState("")
  const [business_stage,setBusiness_stage] = useState("");
  const [age_of_establishment,setAge_of_establishment] = useState(0);
  const [primary_product_service_offered,setPrimary_product_service_offered] = useState("")
  const [offered_to,setOffered_to] = useState("")
  const [secondary_product_service_offered,setSecondary_product_service_offered] = useState("")
  const [processed_products,setProcessed_products] = useState("")
  const [relevant_experience,setRelevant_experience] = useState(0)
  const [skill_training,setSkill_training] = useState("")
  const [usp,setUsp] = useState([]) //
  const [establishment_type,setEstablishment_type] = useState("")
  const [business_area,setBusiness_area] = useState("")
  const [business_locality,setBusiness_locality] = useState("")
  const [infra_ownership,setInfra_ownership] = useState("")
  const [establishment_area,setEstablishment_area] = useState(0)
  const [market_research,setMarket_research] = useState("")
  const [primary_market,setPrimary_market] = useState("")
  const [customers,setCustomers] = useState("")
  const [seasonality,setSeasonality] = useState("")
  const [competition,setCompetition] = useState("")
  const [suppliers,setSuppliers] = useState("")


  function displayName(e){
    setName(e.target.value);
  }
  function displayBusinessStage(e){
    setBusiness_stage(e.target.value);
  }
  function displayAgeOfEstablishment (e){
      setAge_of_establishment(e.target.value);
    }
  
  function displayPrimaryProducts(e){
    setPrimary_product_service_offered(e.target.value);
  }
  function displayOffered_to(e){
    setOffered_to(e.target.value)
  }
  function displaySecondary_product_service_offered(e){
    setSecondary_product_service_offered(e.target.value);
  }
  function displayProcessed_products(e){
    setProcessed_products(e.target.value)
  }
  function displayRelevant_experience(e){
    setRelevant_experience(e.target.value);
  }
  function displaySkill_training(e){
    setSkill_training(e.target.value);
  }
 function displayEstablishment_type(e){
  setEstablishment_type(e.target.value);
 }
function displayBusiness_area(e){
  setBusiness_area(e.target.value);
}
function displayBusiness_locality(e){
  setBusiness_locality(e.target.value)
}
function displayInfra_ownership(e){
  setInfra_ownership(e.target.value)
}
function displayEstablishment_area(e){
  setEstablishment_area(e.target.value);
}
function displayMarket_research(e){
  setMarket_research(e.target.value);
}
function displayPrimary_market(e){
  setPrimary_market(e.target.value);
}
function displayCustomers(e){
  setCustomers(e.target.value);
}
function displaySeasonality(e){
  setSeasonality(e.target.value);
}
function displayCompetition(e){
  setCompetition(e.target.value);
}
function displaySuppliers(e){
  setSuppliers(e.target.value);
}
function displaySentence (e) {
  var updatedName = e.target.value;
  this.setState({name: updatedName}); 
}
  return (
    <div className="intro">
    
      <div>
      <h2>Enter Business Details Here</h2>
      <header className="App-header">
        <Form
          autoComplete="off"
          labelCol={{ span: 5 }}
          wrapperCol={{ span: 7 }}
          onFinish={(values) => {
            // console.log({ values });
          }}
          onFinishFailed={(error) => {
            // console.log({ error });
          }}
        >
          <Form.Item
            name="fullName"
            label="Full Name"
            rules={[
              {
                required: true,
                message: "Please enter name",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder="Type your name" onChange={displayName}/>
          </Form.Item>

          <Form.Item
            name="stage"
            label="Stage of Business"
            rules={[
              {
                required: true,
                message: "Please Select valid stage",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Select Business Stage" onChange={displayBusinessStage}>
              <Select.Option value="Start-up">Start-up</Select.Option>
              <Select.Option value="Scale-up">Scale-up</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="age"
            label="Age of establishment (years) (Enter 0 if it is yet to start-up)"
            rules={[
              {
                required: true,
                message: "Please Select valid age",
              },
            ]}
            hasFeedback
            labelCol={{ span: 27 }}
            wrapperCol={{ span: 3 }}
          >
            <InputNumber
              placeholder="Age of establishment"
              min="0"
              max="100"
              onChange={displayAgeOfEstablishment}
            ></InputNumber>
          </Form.Item>

          <Form.Item
            name="primarycproduct"
            label="Primary Products/Services offfered"
            rules={[
              {
                required: true,
                message: "Please Fill Primary Products/Services offfered",
              },
            ]}
            hasFeedback
            labelCol={{ span: 27 }}
          >
            <Input placeholder="branded mobile phones, repair of laptop batteries, fresh kadak tea etc." onChange={displayPrimaryProducts}></Input>
          </Form.Item>

          <Form.Item
            name="offered_to"
            label="Offered to"
            rules={[
              {
                required: true,
                message: "Please Select This Field",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Offered to" onChange={displayOffered_to}>
              <Select.Option value="end_customers">End Customers</Select.Option>
              <Select.Option value="wholesaler">Wholesaler</Select.Option>
              <Select.Option value="distributor">Distributor</Select.Option>
              <Select.Option value="retailer">Retailer</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="secondaryProduct"
            label="Secondary Products/Services offfered"
            rules={[
              {
                required: true,
                message: "Please Fill Secondary Products/Services offfered",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
            labelCol={{ span: 25 }}
          >
            <Input placeholder="photocopy services, mobile recharge services, transportation of goods to customers, custom fitting of dresses, bridal makeup, agriculture equipments on rent, fish pickles, etc." onChange={displaySecondary_product_service_offered} />
          </Form.Item>

          <Form.Item
            name="processedProduct"
            label="Processed products (Products you produce from the raw materials)"
            rules={[
              {
                required: true,
                message: "Please Enter Processed Products",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
            labelCol={{ span: 25 }}
          >
            <Input placeholder="paneer, protein bars, juice, etc." onChange={displayProcessed_products} />
          </Form.Item>

          <Form.Item
            name="experience"
            label="Years of relevant experience in this field"
            rules={[
              {
                required: true,
                message: "Please Select valid Year",
              },
            ]}
            hasFeedback
            labelCol={{ span: 27 }}
            wrapperCol={{ span: 3 }}
          >
            <InputNumber placeholder="Year" min="0"  onChange={displayRelevant_experience}></InputNumber>
          </Form.Item>

          <Form.Item
            name="skill_training"
            label="Skill training"
            rules={[
              {
                required: true,
                message: "Please Select skills",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Skill training">
              <Select.Option value="no_formal_skill_training" onChange={displaySkill_training}>
                {" "}
                No formal skill training
              </Select.Option>
              <Select.Option value="has_formal_skill_training_and certificate">
                {" "}
                Has formal skill training and certificate
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="usp"
            label="Unique Selling Proposition"
            rules={[
              {
                required: true,
                message: "Please Select Unique Selling Propositions",
              },
            ]}
            wrapperCol={{ span: 10 }}
            labelCol={{ span: 5 }}
          >
            <Checkbox>The entreprenuer's experience in this field</Checkbox>
            <Checkbox> Innovative product/service</Checkbox>
            <br />
            <Checkbox>High Profit Margin</Checkbox>
            <br />
            <Checkbox>High Growth Potential</Checkbox>
            <br />
            <Checkbox>Superior customer support</Checkbox>
            <br />
            <Checkbox>Quality and affordable products/service</Checkbox>
            <Checkbox>High demand in target market(forward linkage)</Checkbox>
            <Checkbox>
              Abundant supply of raw materials(backward linkage)
            </Checkbox>
            <Checkbox>Wide range of products/services</Checkbox>
            <Checkbox>Robust value-chain of business</Checkbox>
            <br />
            <Checkbox>Frequency of cutomer visits</Checkbox>
          </Form.Item>

          <Form.Item
            name="establishment_type"
            label="Establishment type"
            rules={[
              {
                required: true,
                message: "Please Select type",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Establishment type" onChange={displayEstablishment_type}>
              <Select.Option value="factory">Factory</Select.Option>
              <Select.Option value="mill">Mill</Select.Option>
              <Select.Option value="stall">Stall</Select.Option>
              <Select.Option value="workshop">workshop</Select.Option>
              <Select.Option value="boutique">Boutique</Select.Option>
              <Select.Option value="vehicle">Vehicle</Select.Option>
              <Select.Option value="center">Center</Select.Option>
              <Select.Option value="Store">store</Select.Option>
              <Select.Option value="farm">Farm</Select.Option>
              <Select.Option value="plant">Plant</Select.Option>
              <Select.Option value="processing">Processing</Select.Option>
              <Select.Option value="unit">Unit</Select.Option>
              <Select.Option value="shop">Shop</Select.Option>
              <Select.Option value="vendering_cart">Vending Cart</Select.Option>
              <Select.Option value="manufacturing_unit">
                Manufacturing Unit
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="name_of_the_area"
            label="Name of the area"
            rules={[
              {
                required: true,
                message: "Please Enter Area",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
          >
            <Input placeholder=" E.g. Sadar Bazar Colony, Laxmi market, etc." onChange={displayBusiness_area} />
          </Form.Item>

          <Form.Item
            name="locality_of_business"
            label="Locality of business"
            rules={[
              {
                required: true,
                message: "Please Select Locality of business",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Locality of business" onChange={displayBusiness_locality}>
              <Select.Option value="urban">Urban</Select.Option>
              <Select.Option value="rural">Rural</Select.Option>
              <Select.Option value="semi-urban">Semi-urban</Select.Option>
              <Select.Option value="slum">Slum</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="ownership_of_infrastructure"
            label="Ownership of infrastructure"
            rules={[
              {
                required: true,
                message: "Please Select",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Ownership of infrastructure" onChange={displayInfra_ownership}>
              <Select.Option value="rented">Rented</Select.Option>
              <Select.Option value="leased">Leased</Select.Option>
              <Select.Option value="self-owned">Self-owned</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="establishment_area"
            label="Establishment area (in square feet) (Enter 0 if the establishment area is irrelevant)"
            rules={[
              {
                required: true,
                message: "Please Select",
              },
            ]}
            hasFeedback
            labelCol={{ span: 27 }}
            wrapperCol={{ span: 3 }}
          >
            <InputNumber
              placeholder="Area of establishment"
              min="0"
              onChange={displayEstablishment_area}
            ></InputNumber>
          </Form.Item>

          <Form.Item
            name="reason_for_location"
            label="Reason for selecting this location"
            rules={[
              {
                required: true,
                message: "Please Select Reasons",
              },
            ]}
            wrapperCol={{ span: 10 }}
          >
            <Checkbox>Nearness to market</Checkbox>
            <br />
            <Checkbox>Good footfall</Checkbox>
            <br />
            <Checkbox>Nearness to the source of raw materials</Checkbox>
            <Checkbox>Lesser competition around</Checkbox> <br />
            <Checkbox>Access to permit/license of operate</Checkbox> <br />
            <Checkbox>Nearness to suppliers</Checkbox> <br />
            <Checkbox>Affordability(rent)</Checkbox> <br />
            <Checkbox>No rental overheads</Checkbox> <br />
            <Checkbox>Other such factors</Checkbox>
          </Form.Item>

          <Form.Item name="market_research" label="Market research"
          rules={[
              {
                required: true,
                message: "Please Select",
              },
            ]}
            hasFeedback
            >
            <Select placeholder="Market research" onChange={displayMarket_research}>
              <Select.Option value="not_conducted">Not conducted</Select.Option>
              <Select.Option value="market_research_has_been_conducted">
                Market research has been conducted
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="Primary market" label="Primary market"
          rules={[
            {
              required: true,
              message: "Please Select",
            },
          ]}
          hasFeedback>
            <Select placeholder="Primary market"onChange={displayPrimary_market}>
              <Select.Option value="local">Local</Select.Option>
              <Select.Option value="regional">Regional</Select.Option>
              <Select.Option value="national">National</Select.Option>
              <Select.Option value="internation">International</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="Customers"
            label="Customers"
            rules={[
              {
                required: true,
                message: "Please Fill Customers",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
            labelCol={{ span: 25 }}
          >
            <Input placeholder="e.g. School-going students, collge-going students, housewives, truck-drivers, etc."   onChange={displayCustomers}/>
          </Form.Item>

          <Form.Item
            name="seasonality"
            label="Seasons of high sales"
            rules={[
              {
                required: true,
                message: "Please Select any",
              },
            ]}
          >
            <Select placeholder="Seasons of high sales" onChange={displaySeasonality}>
              <Select.Option value="consistent_sales_across_all_season">
                Consistent sales across all season
              </Select.Option>
              <Select.Option value="higher_sales_in_festive_seasons">
                Higher sales in festive seasons
              </Select.Option>
              <Select.Option value="high_sales_in_cropping/cultivation_season">
                High sales in cropping/cultivation season
              </Select.Option>
              <Select.Option value="high_sales_in_peak_seasons">
                High sales in peak seasons,etc
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="competition"
            label="Competition"
            rules={[
              {
                required: true,
                message: "Please Select Competition",
              },
            ]}
            hasFeedback
          >
            <Select placeholder="Competition" onChange={displayCompetition}>
              <Select.Option value="no_similar_goods/service_provider_in_this_locality">
                No similar goods/service provider in this locality
              </Select.Option>
              <Select.Option value="only_a_few_similar_goods/service_providers_in_this_locality">
                Only a few similar goods/service providers in this locality
              </Select.Option>
              <Select.Option value="many_similar_goods/services_providers_in_this_locality">
                Many similar goods/services providers in this locality
              </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="List of Suppliers"
            label="suppliers"
            rules={[
              {
                required: true,
                message: "Please give List of Suppliers",
              },
              { whitespace: true },
              { min: 3 },
            ]}
            hasFeedback
            labelCol={{ span: 25 }}
          >
            <Input placeholder="E.g. identfiied distributor in the district, Kolkata flea market, etc." onChange={displaySuppliers}/>
          </Form.Item>

          <Form.Item
            name="marketing_avenues"
            label="Marketing avenues"
            rules={[
              {
                required: true,
                message: "Please Choose Marketing avenues",
              },
            ]}
            wrapperCol={{ span: 10 }}
            hasFeedback
          >
            <Checkbox>
              Distribution of marketing material(pamphlets/flyers)
            </Checkbox>
            <Checkbox>Storefront/business branding</Checkbox>
            <br />
            <Checkbox>Seasonal discounts and offers</Checkbox>
            <br />
            <Checkbox>Cross-promotion</Checkbox>
            <br />
            <Checkbox>Digital Marketing</Checkbox>
            <br />
            <Checkbox>Word of mouth</Checkbox>
            <br />
          </Form.Item>

          <Form.Item
            name="avenues_of_scaling_up_in_future"
            label="Avenues of scaling up in future"
            rules={[
              {
                required: true,
                message: "Please Select avenues of scaling up in future",
              },
            ]}
            wrapperCol={{ span: 10 }}
            hasFeedback
          >
            <Checkbox>
              Increasing the variety of product/service offering
            </Checkbox>
            <Checkbox>
              Expanding the current offering to other geographies
            </Checkbox>
            <Checkbox>Opening more outlets</Checkbox>
            <br />
            <Checkbox>Growing the scale of operation</Checkbox>
            <Checkbox>Buliding value-chain integration</Checkbox>
            <br />
            <Checkbox> Other allied revenue streams</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 13 }}>
            <Button block type="danger" htmlType="submit" onSubmit = { e =>this.displaySentence(e)}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </header>
      </div>

      <div>
      {/* <p>"FirstName: " {this.state.name}</p> */}
      </div>
    </div>
  );
}

export default Introduction;
