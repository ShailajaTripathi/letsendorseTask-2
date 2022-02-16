import React, {useState}from "react";

function simpleform() {

  const [business_stage,setBusiness_stage] = useState("");
  const [age_of_establishment,setAge_of_establishment] = useState(0);
  const [primary_product_service_offered,setPrimary_product_service_offered] = useState('')
  const [offered_to,setOffered_to] = useState('')
  const [secondary_product_service_offered,setSecondary_product_service_offered] = useState('')
  const [processed_products,setProcessed_products] = useState('')
  const [relevant_experience,setRelevant_experience] = useState(0)
  const [skill_training,setSkill_training] = useState('')
  const [usp,setUsp] = useState([]) //
  const [establishment_type,setEstablishment_type] = useState('')
  const [business_area,setBusiness_area] = useState('')
  const [business_locality,setBusiness_locality] = useState('')
  const [infra_ownership,setInfra_ownership] = useState('')
  const [establishment_area,setEstablishment_area] = useState(0)
  const [market_research,setMarket_research] = useState('')
  const [primary_market,setPrimary_market] = useState('')
  const [customers,setCustomers] = useState('')
  const [seasonality,setSeasonality] = useState('')
  const [competition,setCompetition] = useState('')
  const [suppliers,setSuppliers] = useState('')

  function displayBusinessStage (e){
    setBusiness_stage(e.target.value);
  }
  console.log(business_stage);

  function displayAgeOfEstablishment (e){
    if(e.target.value < 0 || e.target.value > 100 ){
      alert("Please select between 0 and 100")
    }
    else{
      setAge_of_establishment(e.target.value);
    }
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
  return (
    <div>
     
      <form>
        <div className="introduction">
          <div className="input-row">
            <div>
              <label >Business Stage</label>  
              {/* for="stageOfBusiness" */}
              <br />
              <select className="business_stage" onChange={displayBusinessStage}>
                <option value="Start-up">Start-up</option>
                <option value="Scale-up">Scale-up</option>
              </select>
            </div>
            <br />
            <br />
            <div>
              <label >
                {/*  */}
                Age Of Establishment(Year)(Enter 0 if it is yet to start-up)
              </label>
              <br />
              <input
                className="age_of_establishment"
                type="number"
                min="0"
                max="100"
                onChange={displayAgeOfEstablishment}
              ></input>
              <br />
              <br />
            </div>
          </div>
          <label onChange={displayPrimaryProducts}>
            Primary Products/Services Offered
          </label>
          <br />
          <input
            className="primary_products_service_offered"
            onChange={displayProcessed_products}
            type="text" 
          ></input>
          <br />
          <br />
          <label >Offered to</label>
          {/* offered_to */}
          <br />
          <select className="offered_to" onChange={displayOffered_to}>
            <option value="end_customers">End Customers</option>
            <option value="wholesaler">Wholesaler</option>
            <option value="distributor">Distributor</option>
            <option value="retailer">Retailer</option>
          </select>{" "}
          <br />
          <br />
          <label >
            Secondary Products/Services Offered
          </label>
          <br />
          <input
          onChange={displaySecondary_product_service_offered}
            className="secondary_products_service_offered"
            type="text"
            
          ></input>{" "}
          <br />
          <br />
          <label >
            {/* processed_products */}
            Processed Products(Products you produce from the raw material)
          </label>
          <br />
          <input className="processed_products" type="text"></input> <br />
          <br />
          <label >
            {/* relevant_experience */}
            Years of relevant experience in this field
          </label>
          <br />
          <input className="relevant_experience" type="number" onChange={displayRelevant_experience}></input> <br />
          <br />
          <label >Skill training</label>
          {/* skill_training */}
          <br />
          <select className="skill_training" onChange={displaySkill_training}>
            <option value="no_formal_skill_training">
              No formal skill training
            </option>
            <option value="has_formal_skill_training_and certificate">
              has formal skill training and certificate
            </option>
          </select>{" "}
          <br />
          <br />
          <label>Unique Selling Proposition</label>
          {/* usp */}
          <br />
          {/* <select className="usp" multiple>
          <option value="entreprenuer's_experience_in_this_field">The entreprenuer's experience in this field</option>
          <option value="innovative_product_service">Innovative product/service</option>
          <option value="high_profit_margin">High Profit Margin</option>
          <option value="high_growth_potential">High Growth Potential</option>
          <option value="superior_customer_support">Superior customer support</option>
          <option value="quality_and_affordable_products/service">Quality and affordable products/service</option>
          <option value="high_demand_in_target_marget">High demand in target market(forward linkage)</option>
          <option value="abundant_supply_of_raw_materials">Abundant supply of raw materials(backward linkage)</option>
          <option value="wide_range_of_products/services">Wide range of products/services</option>
          <option value="robust_value-chain_of_business">Robust value-chain of business</option>
          <option value="frequency_of_customer_visits">Frequency of cutomer visits</option>
          </select> <br/> */}
          <input type="Checkbox" value="yes" />
          <label >
            {/* entreprenuer's_experience_in_this_field */}
            The entreprenuer's experience in this field
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* innovative_product_service */}
            Innovative product/service
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* high_profit_margin */}
          <label>High Profit Margin</label>

          <br />
          <input type="Checkbox" value="yes" />
          {/* high_growth_potential */}
          <label>High Growth Potential</label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* superior_customer_support */}
            Superior customer support
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* quality_and_affordable_products/service */}
            Quality and affordable products/service
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* high_demand_in_target_marget */}
            High demand in target market(forward linkage)
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* abundant_supply_of_raw_materials */}
            Abundant supply of raw materials(backward linkage)
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* wide_range_of_products/services */}
            Wide range of products/services
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* robust_value-chain_of_business */}
            Robust value-chain of business
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* frequency_of_customer_visits */}
            Frequency of cutomer visits
          </label>
          <br />
          <br />
        </div>
        {/* location starts */}
        <div className="location">
          {/* establishment_type */}
          <label>Establishment Type</label>
          <br />
          <select className="establishment_type"  onChange={displayEstablishment_type}>
            <option value="factory">Factory</option>
            <option value="mill">Mill</option>
            <option value="stall">Stall</option>
            <option value="workshop">workshop</option>
            <option value="boutique">Boutique</option>
            <option value="vehicle">Vehicle</option>
            <option value="center">Center</option>
            <option value="Store">store</option>
            <option value="farm">Farm</option>
            <option value="plant">Plant</option>
            <option value="processing">Processing</option>
            <option value="unit">Unit</option>
            <option value="shop">Shop</option>
            <option value="vendering_cart">Vending Cart</option>
            <option value="manufacturing_unit">Manufacturing Unit</option>
          </select>{" "}
          <br />
          <br />
          {/* business_area */}
          <label >Name of the area</label>
          <br />
          <input
            className="business_area"
            type="text"
            onChange={displayBusiness_area}
            placeholder="E.g. Sadar Bazar Colony,Laxmi market,etc"
          ></input>{" "}
          <br />
          <br />
          {/* business_locality */}
          <label >Locality of business</label>
          <br />
          <select className="offered_to" onChange={displayBusiness_locality}>
            <option value="urban">Urban</option>
            <option value="rural">Rural</option>
            <option value="semi-urban">Semi-urban</option>
            <option value="slum">Slum</option>
            <option value="rented">Rented</option>
            <option value="leased">Leased</option>
            <option value="self-owned">Self-owned</option>
          </select>{" "}
          <br />
          <br />

          <label >Ownership of infrastructure</label>
          <br />
          <select className="offered_to" onChange={displayInfra_ownership}>
            <option value="urban">Rented</option>
            <option value="rural">Leased</option>
            <option value="semi-urban">Self-Ownership</option>
          </select>{" "}
          <br />
          <br />

          {/* establishment_area */}
          <label >
            Establishment area(in square feet)(Enter 0 if the establishment area
            is irrelevant)
          </label>
          <br />
          <input className="age_of_establishment" type="number" min="0" onChange={displayEstablishment_area}></input>
          <br />
          <br />
          {/* reason_for_location */}
          <label>
            Reason for selecting this location
          </label>
          <br />
          {/* <select className="reason_for_location" multiple>
          <option value="nearness_to_market">Nearness to market</option>
          <option value="good_footfall">Good footfall</option>
          <option value="nearness_to_the_source_of_raw_material">Nearness to the source of raw materials</option>
          <option value="nearness_to_targeted_customer_demographics">Nearness to targeted customer demographics</option>
          <option value="lesser_competition_around">Lesser competition around</option>
          <option value="access_to_permit/license_of_operate">Access to permit/license of operate</option>
          <option value="nearness_to_suppliers">Nearness to suppliers</option>
          <option value="affordability">Affordability (rent)</option>
          <option value="no_rental_overheads">No rental overheads</option>
          <option value="other such factor">Other such factors</option>
          </select> <br/> */}
          <input type="Checkbox" value="yes" />

          {/* nearness_to_market */}
          <label>Nearness to market</label>
          <br />
          <input type="Checkbox" value="yes" />

          {/* good_footfall */}
          <label >Good footfall</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* nearness_to_the_source_of_raw_material */}
          <label>
            Nearness to the source of raw materials
          </label>
          <br />
          <input type="Checkbox" value="yes" />

          {/* nearness_to_targeted_customer_demographics */}
          <label>
            Nearness to targeted customer demographics
          </label>
          <br />
          <input type="Checkbox" value="yes" />

          {/* lesser_competition_around" */}
          <label>
            Lesser competition around
          </label>
          <br />
          <input type="Checkbox" value="yes" />

          {/* access_to_permit/license_of_operate */}
          <label>
            Access to permit/license of operate
          </label>
          <br />
          <input type="Checkbox" value="yes" />

          {/* nearness_to_suppliers */}
          <label>Nearness to suppliers</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* affordability */}
          <label>Affordability(rent)</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* no_rental_overheads */}
          <label>No rental overheads</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* other such factor */}
          <label>Other such factors</label>
          <br />
          <br />
        </div>

        <div className="target_marget">
          {/* market_research */}
          <label>Market research</label>
          <br />
          <select className="market_research" onChange={displayMarket_research}>
            <option value="not_conducted">Not conducted</option>
            <option value="market_research_has_been_conducted">
              Market research has been conducted
            </option>
          </select>{" "}
          <br />
          <br />
        
          <label>Market research</label>
          <br />
          <select className="primary_market" onChange={displayPrimary_market}>
            <option value="local">Local</option>
            <option value="regional">Regional</option>
            <option value="national">National</option>
            <option value="internation">International</option>
          </select>{" "}
          <br />
          <br />
          {/* customers */}
          <label>Customers</label>
          <br />
          <input
            className="customers"
            type="text"
            onChange={displayCustomers}
            placeholder="School-going students,college-going students,housewives,truck-drivers etc."
          ></input>
          <br />
          <br />
          {/* seasonality */}
          <label >Seasons of high sales</label>
          <br />
          <select className="seasonality" onChange={displaySeasonality}>
            <option value="consistent_sales_across_all_season">
              Consistent sales across all season
            </option>
            <option value="higher_sales_in_festive_seasons">
              Higher sales in festive seasons
            </option>
            <option value="high_sales_in_cropping/cultivation_season">
              High sales in cropping/cultivation season
            </option>
            <option value="high_sales_in_peak_seasons">
              High sales in peak seasons,etc
            </option>
          </select>{" "}
          <br />
          <br />
          {/* Competition */}
          <label>Competition</label>
          <br />
          <select className="competition" onChange={displayCompetition}>
            <option value="no_similar_goods/service_provider_in_this_locality">
              No similar goods/service provider in this locality
            </option>
            <option value="only_a_few_similar_goods/service_providers_in_this_locality">
              Only a few similar goods/service providers in this locality
            </option>
            <option value="many_similar_goods/services_providers_in_this_locality">
              Many similar goods/services providers in this locality
            </option>
          </select>{" "}
          <br />
          <br />
          {/* suppliers */}
          <label>List of Suppliers</label>
          <br />
          <input
            className="suppliers"
            type="text"
            onChange={displaySuppliers}
            placeholder="Identified distributor in the district,Kolkata flea market etc"
          ></input>
          <br />
          <br />
          {/* marketing_avenues */}
          <label>Marketing avenues</label>
          <br />
          {/* <select className="marketing_avenues" multiple>
         <option value="distribution_of_marketing_material">Distribution of marketing material(pamphlets/flyers)</option>
         <option value="storefront/business_branding">storefront/business branding</option>
         <option value="seasonal_discounts_and_offers">Seasonal discounts and offers</option>
         <option value="cross-promotion">Cross-promotion</option>
         <option value="digital_marketing">Digital Marketing</option>
         <option value="word_of_mouth">Word of mouth</option>
          </select> <br/>
        <br/> */}
          <input type="Checkbox" value="yes" />
          {/* distribution_of_marketing_material */}
          <label>
            Distribution of marketing material(pamphlets/flyers)
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* storefront/business_branding */}
          <label>
            Storefront/business branding
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* seasonal_discounts_and_offers */}
            Seasonal discounts and offers
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label for="cross-promotion">Cross-promotion</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* digital_marketing */}
          <label >Digital Marketing</label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* word_of_mouth */}
          <label>Word of mouth</label>
          <br />
          <br />
        </div>

        <div className="Scaling-up-potential">
          <label>
            {/* aventures_of_scaling_in_future */}
            Aventures of scaling in future
          </label>
          <br />
          {/* <select className="aventures_of_scaling_in_future" multiple>
         <option value="increasing_the variety of product">Increasing the variety of product/service offering</option>
         <option value="expanding_the_current_offering_to_other_geographies">Expanding the current offering to other geographies</option>
         <option value="opening_more_outlets">opening more outlets</option>
         <option value="growing_the_scale_of_operation">Growing the scale of operation</option>
         <option value="buliding_value-chain_integration">Buliding value-chain integration</option>
         <option value="other_allied_revenue_streams">Other allied revenue streams</option>
          </select> <br/> */}

          <input type="Checkbox" value="yes" />
          <label>
            {/* increasing_the variety of product */}
            Increasing the variety of product/service offering
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* expanding_the_current_offering_to_other_geographies */}
            Expanding the current offering to other geographies
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          {/* opening_more_outlets */}
          <label>opening more outlets</label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* growing_the_scale_of_operation */}
            Growing the scale of operation
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label>
            {/* buliding_value-chain_integration */}
            Buliding value-chain integration
          </label>
          <br />
          <input type="Checkbox" value="yes" />
          <label >
            {/* other_allied_revenue_streams */}
            Other allied revenue streams
          </label>
          <br />
          <br />

          <br />
        </div>

        <input type="submit" value="Submit" />

      </form>
    </div>
  );
}

export default simpleform;
