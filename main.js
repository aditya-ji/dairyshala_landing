



// Function to initialize (or re-initialize) ScrollReveal animations on dynamic content
function initScrollRevealAnimations() {
  const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  // Apply ScrollReveal to the new elements
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });

  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });

  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });

  ScrollReveal().reveal(".header__content form", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".header__content .bar", {
    ...scrollRevealOption,
    delay: 2000,
  });

  ScrollReveal().reveal(".header__image__card", {
    duration: 1000,
    interval: 500,
    delay: 2500,
  });
}

// Function to load dynamic page content
function loadPage(page) {
  const content = document.getElementById("content");
  switch (page) {
    case "home":
      content.innerHTML = `
        <header>
        <main>
          <div class="header__container">
            <div class="header__content">
              <h1>Why Shop? <br />Let <span>DairyShala</span> Drop! <br>Fresh<span> Milk & Groceries</span> Just a Tap Away!</h1>
              <p>
                DairyShala brings fresh milk and groceries from nearby farms and stores straight to your doorstep. With just a tap, you get high-quality, farm-fresh dairy products and daily essentials without the hassle of visiting multiple shops. Enjoy convenience, freshness, and speedy delivery—all in one app. Order now and experience effortless shopping!
              </p>
              <form action="/">
                <div class="header__btns gradient-border">
                  <a href="#">
                    <img src="assets/google-play.jpg" alt="Google Play" />
                  </a>
                  <a href="#">
                    <img src="assets/app-store.jpg" alt="App Store" />
                  </a>
                </div>
              </form>
            </div>
            <div class="header__image">
              <div class="header__image__card header__image__card-1">
                <span><img src="assets/1.png" alt="Fresh Milk" /></span>
                Fresh Milk
              </div>
              <div class="header__image__card header__image__card-2">
                <span><img src="assets/2.png" alt="Vegetable" /></span>
                Vegetable
              </div>
              <div class="header__image__card header__image__card-3">
                <span><img src="assets/6.png" alt="Groceries" /></span>
                Groceries
              </div>
              <div class="header__image__card header__image__card-4">
                <span><img src="assets/4.png" alt="Fruits" /></span>
                Fruits
              </div>
              <img src="assets/header.png" alt="Header Image" />
            </div>
          </div>
          <div class="milk-image-container">
            <img src="assets/milk.png" alt="Milk Image" />
          </div>
        </header>
        
        <section>
          <div class="header1">
            <h2 class="section-title">Why Are We Unique?</h2>
            <div class="features-grid">
              <div class="feature-column">
                <div class="icon-container">
                  <i class="ri-fire-fill"></i>
                </div>
                <div class="feature-item">
                  <p class="feature-text1">We've Upped the<br> Game.</p>
                </div>
                <div class="feature-item">
                  <p class="feature-text">We carry a variety of products through our unique vendors that you can't typically get delivered.</p>
                </div>
              </div>
              <div class="feature-column">
                <div class="icon-container">
                  <i class="ri-lightbulb-flash-fill"></i>
                </div>
                <div class="feature-item">
                  <p class="feature-text1">Order from our virtual mall of local stores.</p>
                </div>
                <div class="feature-item">
                  <p class="feature-text">Order from a large variety of local stores you trust — for products you can't typically get delivered.</p>
                </div>
              </div>
              <div class="feature-column">
                <div class="icon-container">
                  <i class="ri-service-fill"></i>
                </div>
                <div class="feature-item">
                  <p class="feature-text1">Easy Access to Fresh Dairy & Groceries</p>
                </div>
                <div class="feature-item">
                  <p class="feature-text">Get farm-fresh milk and daily essentials from trusted local stores, delivered straight to your doorstep with ease!</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </main>
      `;
      break;
    case "about":
      content.innerHTML = `
      <main>
        <section>
          <div class="about_heder">
          <h1>About us</h1>
          <p>DairyShala is your go-to platform for fresh milk and grocery delivery from nearby dairies and trusted local stores. We connect you with farm-fresh dairy products and essential groceries, ensuring quality and convenience at your fingertips. With just a tap, you can browse and order from a variety of local suppliers, getting everything you need delivered straight to your doorstep. Our mission is to support local farmers and businesses while providing customers with fresh, healthy, and affordable products. Experience the ease of hassle-free shopping with DairyShala and enjoy the freshness you deserve—delivered quickly and reliably every day!
          </P>
          </div>

        </section>
        </main>
      `;
      break;
    case "contact":
      content.innerHTML = `
      <main>
        <section>
        <div class="contact">
          <h1>Contact</h1>
          <p>Get in touch with us at <a href="mailto:info@dairyshala.com">info@dairyshala.com</a>.</p>
        </section>
        </div>
        </main>
      `;
      break;
    case "trems_and_condition":
      content.innerHTML = `
      <main>
        <section>
        <div class="trems">
          <h2>Trems & Condition</h2>
          <p>This website www.dairyshala.com is operated by Web Zono Private Limited (WZPL), an India based company incorporated under the Indian Companies Act of 2013.
The policy is issued by 'WZPL'. By placing an order on this site you are entering into a purchase/sale transaction with WZPL. The terms and conditions are enumerated as follows.
</p>
<h1>Definitions</h1>
<p>"Agreement" means the terms and conditions as detailed herein including all schedules, appendices, annexure, privacy policy and will include the references to this Agreement as amended, supplemented, varied or replaced from time to time.</P>
<p>or the "Site" means the online shopping portal owned and operated by WZPL which provides a plat to the shoppers to buy the products listed on the site. "Vendor"/-"Seller"/"Affiliate" shall mean the person or any legal entity who offers for sale, sells the products or services on www.dairyshala.in.</P>
<p>"Customer" / "Buyer" shall mean the person or any legal entity who acceptithe offer for sale on site by placing an order for and or purchases any products offered for sale on the site. "User"/"You" means and includes you and/or any person or an entity including Vendor/Seller/Affiliate using or accessing the services provided on this Site.</P>


<h1>Eligibility</h1>
<p>You represent and warrant that you are competent and eligible to enter into a legally binding agreement and have the requisite authority to bind the other party to this Agreement. You shall not use this Site if you are not competent to contract under the applicable laws, rules and regulations</P>
       <h1>Term</h1> 
       <p>This Agreement shall continue to be in full force and effect for so long as you are using the site. The site provides online shopping platform wherein the Users can purchase/buy the products and services listed on it pursuant to the terms and conditions set forth below. By clicking on the "Proceed to Payment" button, you are agreeing to use the Services in a manner consistent with and abide by the terms and conditions of this Agreement, our Privacy Policy, and with all applicable laws and regulations.</P>  
        <h1>Termination</h1>
        <p>Either User/ You or WZPL may terminate the agreement at any time, with or without cause. However, WZPL reserves the right, in its sole discretion, to terminate your access to the products and services offered on the site or any portion thereof at any time, without notice.</p>
       
       <h1>Modification of Terms and Conditions</h1>
       <p>WZPL may at any time modify the terms and conditions contained on the Site without any prior notification to you. You can access the latest version of the Terms and Conditions at any given time. You should regularly review the Terms and Conditions. In the event the modified Terms and Conditions are not acceptable to you, you should discontinue using the site. However, if you continue to use the site you agree to accept and abide by the modified Terms and Conditions.</p>
        <h1>Online Shopping Platform</h1>
        <p>You further agree and undertake that you are accessing the services available on this Site and transacting at your sole risk and are using your best and prudent judgment before entering into any transaction through this Site.</p>
       <p>WZPL accepts no liability for any errors or omissions, whether on behalf of itself or third parties. The address at which delivery of the products ordered by you are to be made should be correct and proper in all respects.</p>
       <p>After the receipt of payment the Buyer/ cash on delivery as the case may be, WZPL shall arrange for the delivery of the product to the recipient at the shipping address provided by the Buyer. Any and all orders placed by you on this site are a firm commitment to purchase and you are obligated to complete the transaction and not contest it in anyway. Before placing an order you are advised to check the product description carefully. By placing an order for a product you agree to be bound by the conditions of sale included in the item's description.</P>
       <h1>Product Pricing</h1>
       <p>Product prices listed on the website are current. While every care has been taken to label the products accurately, errors in data entry and updation may occur. WZPL reserve the right to cancel the order in case a wallet (excluding any cashback benefit) is refundable by placing the request to the customer support. Refundable amount is credited to the customer's bank account shared using the link sent in SMS by the WZPL Refund is credited within 5-7 working days of sharing the bank details.in case payments done through credit card it will be refunded to the same mode of payment.</p>
       <h1>Offer & Cashback</h1>
       <li>Maximum CashBack Upto Rs 150.</li>
       <li>Cannot Be clubbed with any other offer.</li>
       <li>Maximum 1 Offer on 1 Address.</li>
       <li>Offer valid on first recharge only.</li>
       <li>CashBack Amount cannot be Refunded.</li>
       <h1>Cancellation Policy</h1>
       <li>Customer can cancel/stop their subscription using Dairyshala mobile application or by reaching out to the customer support.</li>
       <li>Multiple Accounts cannot be created with same address, if found then WZPL has the right to cancel/stop the Customer's subscription.</li>
       <h1>F<span>n</span>V Cancellation (At the time of delivery only)</h1>
       <p>Going forward, if the customer denies taking the FnV order at the time of delivery, he/she will have to pay a cancellation charge of Rs. 100.</P>  
       <h1>Entire Agreement</h1>
       <p>These Terms and Conditions, together with privacy policy, and other rules and policies posted on the site, which are hereby incorporated as set forth fully in these Terms and Conditions, constitutes the entire agreement between you and WZPL with respect to your use of and material available through the site, and supersedes all prior or contemporaneous communications and proposals between you and WZPL with respect to this site. Any rights not expressly granted in these Terms and Conditions are reserved.</P>     
       <h1>Communication</h1>
       <p>By registering with WZPL, you give us the permission to send you notifications on WhatsApp.</p>
       <h1>Billing Policy & Payment</h1>
       <li>The billing cycle for customers is 15 days. ie bill is generated twice a month.</li>
       <li>In case of bill payment by cheque, please draw the cheque in favour of WEB ZONO PVT. LTD.'</li>
       <li>In case of bill payment in cash, please submit the OTP that is sent to your registered mobile number before handing out cash to our delivery partner.</li>
       <li>Customers are liable to receive the Transaction details for the latest 6 months only, DS will not provide the Customer transaction details beyond 6 months.</li>
       <li>Customers can download the latest 3 months bills through the Dairyshala Application.</li>
       <h1>Return Policy</h1>
       <p>The return policy has been revised. As per the new policy, WZPL doesn't have a return policy until and unless it is related to the product quality. Hence if the customer wants to return a product because he/she doesn't require it, in such cases we will simply deny the customer.</p>
       <h1>Dairyshala Referral Program</h1>
       <li>One user can refer a maximum of 15 new users. However, the Referee and the Referrer cannot have the same address.</li>
       <li>The Referrer should have done at least one recharge with WZPL in the last thirty (30) days of minimum value of Rs.150 or must have done a cumulative wallet recharge of Rs. 2000 or more in their lifetime.</li>
       <li>To be considered a successful Referral, the person you refer (the Referee) has to do at least one wallet recharge of minimum value of Rs. 200.</li>
       <li>The Referrer gets 100% cashback up to a maximum of Rs.100 per Referee, on the Referee's first wallet recharge of minimum amount of Rs. 200. WZPL reserves the right to revise the maximum cashback percentage and amount at any point of time during this referral programme. Please read these terms and conditions carefully from time to time.</li>
       <li>Referral bonus cannot be clubbed with any other promotional offer or bonus.</li>
       <li>'Bonus' amount in the Wallet can be used only for purchase on Dairyshala website and/or mobile application, is not transferable and in no case can be used as an exchange for tender of money.</li>
       <li>WZPL reserves the right to modify or amend at any time these Terms and Conditions. WZPL reserves the right to disqualify any Referrers from participation at any time at their sole discretion, including without limitation if he/she does not comply with any of these Terms and Conditions</li>
       <li>The Referrer and the Referee agree to indemnify, release and hold harmless WZPL, from any and all claims, actions, demands, damages, losses, liabilities, costs or expenses caused by, arising out of, in connection with, or related to Referrers' participation in the referral program.</li>
       <li>No person under 18 years of age, may use, access or participate in the referral program at any time or in any manner.</li>
       <li>WZPL shall not be liable for late, delayed, stolen, misdirected, inaccurate credits in relation to any information provided by the Referee or Referrer.</li>
       <li>WZPL reserves the right to hold back Cashback bonus for breach of these terms and conditions, as well as debit the bonus already credited, in case of violation of these terms and conditions.</li>
       <li>Any and all disputes, claims and causes of action arising out of or related to the referral program shall be resolved under applicable Indian law and the courts of New Delhi shall have the sole and exclusive jurisdiction to try any dispute with regard to this referral programme, irrespective of place of purchase/credit of bonus.</li>
       <h1>Nach Mandate and Transaction Management</h1>
       <li>Transactions against the NACH Mandate shall be processed only on a Business Day and in the event of any Transaction due on a non-Business Day, it will be processed on the next succeeding Business Day. in case such Transaction fails, it shall not be re-tried for that calendar month. The Customer shall not be permitted to modify any existing NACH Mandate as Bank does not presently support any modification flow. The Customer, can however revoke the NACH Mandate atleast two days prior to the next Due Date and setup a new mandate.</li>
       <li>The Customer hereby agrees and understands that the processing of the NACH Mandate is subject to actions of the Destination Bank and clearance of funds by the Destination Bank.</li>
       <li>The Customer's Dairyshala App would reflect all the transactions being successful in the Account.</li>
       <li>The Customer hereby understands that upon the revocation of the NACH Mandate by WZPL upon the Customer's request, the Customer shall be required to reinitiate the entire process of setting a NACH Mandate if the Customer is desirous of the same.</li>
       <li>The Customer hereby understands that the Customer can revoke the NACH Mandate atleast two days prior to the next Due Date for it to be effective for the recent transaction cycle. WZPL shall not be liable for any transactions that are processed on account of the failure of the Customer to revoke the NACH Mandate within the above mentioned time period and that the processed transactions shall constitute valid and binding transactions on the Customer.</li>
       <li>The Customer hereby agrees and understands that WZPL shall be processing the NACH Mandate only on the basis of the Destination Account details of the Customer provided by the Customer to WZPL and as verified via mandate verification by Destination Bank, and that WZPL shall not be responsible in any manner whatsoever to verify the details of the Destination Account.</li>
       <h1>Limitation of Liability</h1>
       <li>WZPL assumes no responsibility and shall incur no liability if it is unable to effect the Transaction against the NACH Mandate owing to any one or more of the following circumstances:</li>
       <li>If the NACH Mandate issued by the Customer is/are incomplete, inaccurate, invalid or incorrect.</li>
       <li>If the Destination Account has insufficient balance to enable WZPL to debit it to the extent of the NACH Mandate.</li>
       <li>If the funds available in the Destination Account are under any encumbrance or charge or subject to Destination Bank's right of banker's lien.</li>
       <li>If the Destination Account/ Account is under any attachment or debit freeze on account of any legal and/or regulatory directions.</li>
       <h1>Pre-paid Products</h1>
       <p>To place an order for a prepaid product, you are required to recharge your DS wallet with the MRP of the select product via the various payment modes available.</p>
       <h1>Communication Policy</h1>
       <p>By signing up with WZPL, customer agrees to receive communication on WhatsApp, push notifications, SMS, Email, Customer Support Call, App and Website or the Site Agreement.</p>
       <h1>Disclaimer</h1>
       <p>Please be aware that the company does not solicit any investment opportunity or promise of returns through investment schemes, which could come across through fake websites or apps, which are deceptively similar to the company’s website and logo. These claims and offers are fraudulent and invalid, and you are strongly advised to exercise great caution and disregard such offers and invitations.</p>


       </div>
       </section>
        
        </main>
      `;
      break;
    case "privacy_policy":
      content.innerHTML = `
      <main>
        <section>
        <div class="privay">
          <h2>Privacy Policy</h2>
          <p>WebZono Private Ltd (“WZPL”) is the licensed owner of the brand Dairyshala and the website dairyshala.com (“the Site”), and/or any sub-domains and/or the mobile application (collectively the “Platform”). WZPL respects your privacy. WZPL is the controller responsible for the processing of your data; exceptions are outlined in this Privacy Policy. This Privacy Policy provides:</p>
          
          <li>The kind of information that WZPL may collect from you when you access or use the Platform, and avail the Services or purchase the Products; and</li>
          <li>The manner in which your data is collected and used by WZPL on the Platform.</li>
          <p>As a visitor to the Platform, you are advised to please read the Privacy Policy carefully. By accessing the Platform and the Products and Services provided on the Platform you agree to the collection and use of your data by WZPL in the manner provided in this Privacy Policy. You acknowledge that you are providing your data out of your free will. You hereby agree that the personal data provided by you is accurate and authentic. WZPL shall not be liable for any dispute or claim arising out of the accuracy or authenticity of the data provided by you. In the event you do not provide your data as may be required for registration or thereafter, or you fail to provide permissions or withdraw your consent for processing the data, WZPL shall not have any obligations to provide the Services or sell the Products agreed to be provided/sold under the terms and conditions and we may restrict or prohibit your use of our Platform and Services and/or Products</p>
          <p>In the event, you grant access to any third party to our Services/Products under your account, then the terms "user ", "you", "your" shall by inference include such third party, and this Privacy Policy to the extent permitted under law shall mutatis-mutandis apply to such third party. Notwithstanding anything to the contrary, it shall be your sole responsibility to make such third-party user(s) being granted access under your authorization aware of the terms of this Privacy Policy and adhere to its obligation. You shall be liable to indemnify WZPL against any claims or breach of this Privacy Policy by such third-party user(s).</p>
          <h1>When and what information we collect:</h1>
          <p>As part of the registration process on the Platform, and for the purpose of providing Services/Products to you, WZPL may collect the following personally identifiable information and sensitive personal data about you: Name including first and last name, alternate email address, mobile phone number and contact details, Postal code, Demographic profile (like your age, gender, occupation, education, address etc.), and other information which is capable of identifying you and financial information (payment instrument information, transactions, transaction history, preference in reference to the mode and manner of payment, spending pattern or trends, and other similar data), information about the pages on the Platform you visit/access, the links you click on the Platform, the number of times you access the page and any such browsing information. We collect this information:</p>
          
          <li>Directly from you when you provide it to us; and/or</li>
          <li>Automatically as you navigate through the Platform or our Services/Products (information collected automatically may include usage details, IP addresses and information collected through cookies and other tracking technologies).</li>
          <p>Automatically as you navigate through the Platform or our Services/Products (information collected automatically may include usage details, IP addresses and information collected through cookies and other tracking technologies).</P>
          <h1>How we use the information we collect:</h1>
          <p>WZPL will use your personal information for the following lawful purpose:</p>
          <li>to provide, personalized features to you on the Platform ;</li>
          <li>to provide for promotional offers to you through the Platform and other channels;</li>
          <li>to provide this information to its business associates and partners to get in touch with you when necessary to provide the Services/Products requested by you</li>
          <li>to preserve transaction history as governed by existing law or policy.</li>
          <li>to use the contact information internally to direct its efforts for product improvement, to contact you as a survey respondent, to notify you if you win any contest; and to send you promotional materials from its contest sponsors or advertisers.</li>
          <li>to serve various promotional and advertising materials to you via display advertisements through the Google Ad network on third party websites. You can opt out of Google Analytics for Display Advertising and customize Google Display network ads using the Ads Preferences Manager.</li>
          <li>Information about customers on an aggregate (excluding any information that may identify you specifically) covering customer transaction data and customer demographic and location data may be provided to partners of WZPL for the purpose of creating additional features on the website, creating appropriate merchandising or creating new products and Services/Products and conducting marketing research and statistical analysis of customer behavior and transactions;</li>
          <li>processing, disclosing, transmitting, and/or sharing the data/information with WZPL entities, and other third parties which have business or contractual dealings with us</li>
          <li>to carry out WZPL’s obligation arising from any contracts entered between you and WZPL;</li>
          <li>to understand our users (what they do the Platform, what features they like, how they use them, etc.);</li>
          <li>to process and respond to your queries;</li>
          <li>to generate and review reports and data about, and to conduct research on our user base and Service usage patterns;</li>
          <li>to allow you to participate in interactive features of our Services, if any.</li>
          <h1>With whom your information will be shared</h1>
          <p>WZPL will not use your financial information for any purpose other than to complete a transaction with you. WZPL does not rent, sell or share your personal information and will not disclose any of your personally identifiable information to third parties. In cases where it has your permission to provide Products or Services you've requested, and such information is necessary to provide these Products or Services the information may be shared with WZPL’s business associates and partners. WZPL may, however, share consumer information on an aggregate with its partners or third parties where it deems necessary. In addition WZPL may use this information for promotional offers, to help investigate, prevent or take action regarding unlawful and illegal activities, suspected fraud, potential threat to the safety or security of any person, violations of the Platform’s terms of use or to defend against legal claims; special circumstances such as compliance with subpoenas, court orders, requests/order from legal authorities or law enforcement agencies requiring such disclosure.</p>
          <h1>How do we protect your information</h1>
          <p>To protect against the loss, misuse and alteration of the information under its control, WZPL has in place appropriate physical, electronic and managerial procedures. For example, WZPL servers are accessible only to authorized personnel and your information is shared with employees and authorised personnel on a need to know basis to complete the transaction and to provide the Services/Products requested by you. Although WZPL will endeavor to safeguard the confidentiality of your personally identifiable information, transmissions made by means of the Internet cannot be made absolutely secure. By using this Platform, you agree that WZPL will have no liability for disclosure of your information due to errors in transmission or unauthorized acts of third parties. However, if you suspect any data breach including misuse or loss or unauthorized access to your data, please let WZPL know immediately by contacting on the email address provided in this Privacy Policy.</p>
          <h1>Retention of your information:</h1>
          <p>WZPL retains your personal information as long as necessary for the use of our Products and/or Services or to provide access to and use of the Platform, or for other essential purposes such as complying with our legal obligations, resolving disputes, enforcing our agreements and as long as processing and retaining your information is necessary for our legitimate interest. Because these needs can vary for different data types and purposes, actual retention periods can vary significantly. Even if we delete your information including on account of your rights below, it may persist on backup or archival media for audit, legal, tax or regulatory purposes.</p>
          <h1>Children and Disabled Person:</h1>
          <p>WZPL does not provide Services/Products directly to children under the age of 18 years or proactively collect their personal data. However, WZPL may allow children to use WZPL’s Services/Products provided that their parents or legal guardians give their verifiable consent. The parent or the legal guardian, as applicable shall assume all responsibility and legal liability for the conduct of such child including, without limitation, monitoring the child’s access and use of WZPL’s Services/Products.</p> 
          <p>WZPL does not provide Services/Products directly to children under the age of 18 years or proactively collect their personal data. However, WZPL may allow children to use WZPL’s Services/Products provided that their parents or legal guardians give their verifiable consent. The parent or the legal guardian, as applicable shall assume all responsibility and legal liability for the conduct of such child including, without limitation, monitoring the child’s access and use of WZPL’s Services/Products.</p>
          <p>A person with disability who has a lawful guardian may use WZPL’s Services/Products, provided that the legal guardians of such disabled person shall give their consent to such person using WZPL’s Services/Products. The legal guardian shall assume all responsibility and legal liability for the conduct of such person including, without limitation, monitoring the person’s access and use of WZPL’s Services/Products.</P>
          <p>If we learn that WZPL’s Services are being used by a disable person without obtaining verifiable consent of their legal guardian, then WZPL may take the appropriate steps to delete such information. However, if the lawful guardian discovers the disabled person has submitted his/ her data to WZPL without their consent, the lawful guardian may have such data deleted from WZPL database by sending an e-mail request on the email-id given under ‘Contact Us’. Upon receiving the request, WZPL shall ensure to delete such information from WZPL’s database within reasonable time.</p>
          <h1>Your rights and choices:</h1>
          <p>When WZPL processes information about you, WZPL does so with your consent and/or as necessary to operate WZPL’s business, meet its contractual and legal obligations, protect the security of WZPL’s systems and customers, or fulfil other legitimate interests of WZPL as described in this Privacy Policy. You may however, request for the following:</p>
          <li>opt out of some collection or uses of your information, including the use of cookies and similar technologies and the use of your information for marketing purposes.</li>
          <li>access your information or request its deletion or anonymization.</li>
          <li>change or edit information submitted to us.</li>
          <li>withdraw any consent provided or alter your preferences.</li>
          <li>Right to nominate- you have the right to nominate a person who shall, in case of your death or inability to exercise your rights as a user herein, take appropriate action on your behalf. The Platform allows you to do it online.</li>
          <li>Right to grievance redressal, as provided in "Contact Us", below.</li>
          <p>To correct or update any information you have provided, the Platform allows you to do it online. You may also submit a request for deletion of your personal information or withdraw of consent or in the event of loss of access details you can send an email to: info@dairyshala.in. WZPL does not charge you for any such request. Where WZPL is legally permitted to do so, WZPL may refuse your request. If WZPL refuses your request, WZPL will tell you the reason why.</p>
          <h1>Changes to Privacy Policy:</h1>
          <p>WZPL reserves the right to change or update this policy at any time. Such changes shall be effective immediately upon posting to the Platform. You can access the latest version of this Privacy Policy at any given time on WZPL’s Platform and it shall be your responsibility to stay updated on any changes to this Privacy Policy. Once posted, those changes are effective immediately, unless stated otherwise. In case you disapprove the Privacy Policy or withdraw your consent then you should immediately cease to use the Platform. The terms of this Privacy Policy shall be read with and as an integral part of the terms and conditions.</p>
          <p>Selling your data is strictly against our policy. We track your events and share them with our third-party analytics partners to provide you with better Services/Products.</p>
          <h1>Contact Us:</h1>
          <p>WZPL takes your privacy very seriously and try to adhere to the highest standards when collecting and processing your data. However, if you think there is a problem with the way WZPL is processing your personal data, then WZPL encourage you to contact WZPL’s Grievance Officer (see below) directly to see if your concerns can be addressed.</p>
          <p>If you are not satisfied with the outcome of WZPL’s grievance redressal mechanism, or if you consider that your complaint has not been handled correctly, you may lodge a complaint with the Data Protection Board of India or Information Commissioner's Office, as may be applicable.</p>


          </div>
        </section>
        </main>
      `;
      break;
    default:
      content.innerHTML = `
        <section>
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </section>
      `;
  }

  // Re-initialize the ScrollReveal animations for the newly added content.
  initScrollRevealAnimations();
}

// Listen for URL hash changes (for navigation)
window.addEventListener("hashchange", () => {
  const page = window.location.hash.substring(1);
  loadPage(page);
});

// Load the default page on initial load
document.addEventListener("DOMContentLoaded", () => {
  // Load initial page based on URL hash or default to 'home'
  const initialPage = window.location.hash.substring(1) || "home";
  loadPage(initialPage);

  // Other initialization code (e.g., for navigation menu) can go here.
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  // Toggle mobile menu
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
    menuBtn.setAttribute("aria-expanded", isOpen);
  });

  // Close mobile menu when a link is clicked
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
      menuBtn.setAttribute("aria-expanded", false);
    }
  });
});
