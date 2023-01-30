import React, { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ContentRender from '../../components/ContentRender'
import { Footer } from '../../components/Footer'

const PrivacyScreen = ({ navigation }) => {
  const htmlData = `<style>
  a:link {
    color: black;
    background-color: transparent;
    text-decoration: none;
  }</style><div class="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12" id="single-big-col-1">
<h1 class="main-title-text">Privacy Statement</h1>
<p>This website is owned GreenCross Publishing Ltd, publishers of The Medical Independent and&nbsp;<strong><a href="https://www.medicalindependent.ie/">www.medicalindependent.ie</a>.</strong></p>
<p>GreenCross Publishing is committed to maintaining our users/readers privacy.</p>
<p>We, respect your right to privacy and we seek to comply with our obligations under Regulation (EU) 2016/679 (the General Data Protection Regulation) (the GDPR). There are no policy waivers or exceptions. The GDPR legislation applies to individuals or organisations established in Ireland, and throughout the European Union that control or process data about identified or identifiable living people.</p>
<p>In this data protection notice, we explain how GreenCross collects personal data about you, how we use it and how you can interact with us about this data.</p>
<p>In this notice, ‘we’, ‘us’, ‘our’ ‘GreenCross refers to all our titles including The Medical Independent and the Med iLearning CPD sites. Once you have registered with one of our sites you have access to all our sites. Equally, any information you give to us while registering on one of our sites is available to all our sites.</p>
<p><strong>Graham Cooke, Publisher</strong></p>
<p>GreenCross Publications Ltd and Med iLearning Ltd</p>
<p>Top Floor, 111 Rathmines Road Lower</p>
<p>Dublin 6 D06K5F6</p>
<p>Tel: 353 1 4410024</p>
<h2 id="the-information-we-collect-from-the-users-readers-of-our-websites-may-be-used-in-the-following-ways">The information we collect from the users/readers of our websites may be used in the following ways:</h2>
<p>From time-to-time our site requests information from users/readers via polls, surveys and competitions. Participation in these is completely voluntary and the user therefore has a choice whether or not to disclose this information. Information requested may include contact information – such as name, address, specialty, age, etc. No personal information will be retained for longer than is necessary or used for any undisclosed purpose.</p>
<p>Personal information provided as part of the registration process for any publication, is used to manage your subscription. Any personal information that you provide will be treated with the utmost confidentiality. Using the email addresses provided on registration, medicalindependent.ie and /or greencrosspublishing.ie may contact you regarding renewal of subscriptions.</p>
<p>Any information provided by you in connection with any transaction regarding your credit or debit card numbers, expiry date and billing or delivery address will be used by us solely to process the transaction. These details will be stored on a secure server and may be used by us to facilitate and personalise future transactions with you. If you do not wish us to store and use the information for future transactions, please contact us.</p>
<p>We will not use or disclose your email address for marketing purposes unless you have agreed that we may use or disclose it in this way.</p>
<p>Aggregate statistical information provided by us to our advertisers or others regarding sales or website use will not include personally identifying information.</p>
<p>Cookies are small pieces of information placed by us on your computer which enable us to identify your computer when you access the web site and to provide you with a convenient means of access. The cookies we use also protect the integrity of registered user names and passwords and limit access to ‘paid for’ services. We also use cookies to collect aggregate statistical information about the use of the site. You have the option to decline cookies, but if you decline you may not be able to access all the functionality of the site. We therefore recommend you accept any cookies used by this site.</p>
<p>Your IP address, browser’s user agent, and referring address is logged to help diagnose problems with our server, to administer the site and to identify unique users. Your IP address is also used to gather broad demographic information.</p>
<p><strong><a href="https://www.medicalindependent.ie/">www.medicalindependent.ie</a></strong>&nbsp;and/or&nbsp;<strong><a href="http://greencrosspublishing.ie/">greencrosspublishing.ie</a></strong>&nbsp;may perform statistical analyses of user behaviour in order to measure interest in the various areas of our site (for product development purposes) and to inform advertisers as to how many users have seen or clicked an advertisement. In future we may also use demographic and preference information to allow advertising banners on our website to be targeted, in aggregate, to the readers for whom they are most pertinent. Personal information about you as an individual subscriber will not be provided to any third party without your consent.</p>
<h2 id="providing-your-information-to-third-parties">Providing your information to third parties.</h2>
<p>GreenCross does not share your personal data routinely with third parties, however it may be necessary to do so, in certain circumstances, to assist with the performance of a contract, for example when administering payroll, or when complying with audit or regulatory requests from authorised third parties. We will always ensure that your data is transferred securely in these situations. We may provide non-personal data to third parties, where such information is combined with similar information about other users of our web sites. For example, we might inform third parties regarding the number of unique users who visit our web site, the demographic breakdown of users of our web site, or the activities that visitors to our web site engage in while on our web site. The third parties to whom we may provide this information may include potential or actual advertisers, providers of advertising services (including web site tracking services), sponsors, licensees, researchers and similar parties.</p>
<p>GreenCross may need to share personal data with third parties to comply with applicable law, regulation or lawful requests. When we believe we have been given false, fraudulent or misleading information, or if we suspect criminal activity, we may have a duty to inform the relevant law enforcement agencies, which may be either in or outside the Republic of Ireland.</p>
<p>This site may contain links to other sites. Neither&nbsp;<strong><a href="https://www.medicalindependent.ie/">www.medicalindependent.ie</a></strong>&nbsp;nor&nbsp;<a href="http://greencrosspublishing.ie/">greencrosspublishing.ie</a>&nbsp;is responsible for the privacy practices or the content of such websites.</p>
<p><strong>You have various rights under GDPR in relation to your personal data. These include:</strong></p>
<ul><li>the right to request access to your personal data;</li><li>the right to have your personal data rectified;</li><li>the right to have your personal data erased;</li><li>the right to request that your personal data is only used for specific purposes;</li><li>the right to object to your personal data being processed (if the lawful basis for processing your personal information is the legitimate interest of GreenCross), for example, for marketing;</li><li>The right to object to any automated decision making, where applicable;</li><li>the right to require certain aspects of your personal data to be transferred to you or a third party (in certain circumstances); and</li><li>the right to lodge a complaint with the relevant data regulator in your jurisdiction.</li></ul>
<p>Your rights can be exercised by contacting our office (details above) using the contact details given above.</p>
<p>We reserve the right to transfer information (including your personal data) to a third party in the event of a sale, merger, acquisition, liquidation, receivership or transfer of all or substantially all of the assets of our company or companies, provided that the third party agrees to adhere to the terms of this data protection notice and provided that the third party only uses your personal data for the purposes for which you provided it to us. You will be notified in the event of any such transfer and you will be afforded an opportunity to opt-out.</p>
<p>If you have a complaint about GreenCross’s use of your personal data, please contact graham@greenx.ie (more extensive contact details are given above. All complaints received will be fully investigated. Please supply as much information as possible to assist us to resolve your complaint in a prompt and efficient manner.</p>
<p>You can also contact the Office of the Data Protection Commissioner in Ireland, at&nbsp;<a href="mailto:info@dataprotection.ie"><strong>info@dataprotection.ie</strong></a>&nbsp;or by writing to them at: Data Protection Commissioner, Canal House, Station Road, Portarlington, R32 AP23 Co. Laois, Ireland. Where updates are made to this data protection notice, the updated version will be posted on our web site, so you are always aware of what data we collect, how we use it, and under what circumstances, if any, we may disclose it. If at any time we decide to use your personal data in a manner significantly different from that stated in this policy, or otherwise disclosed to you at the time it was collected, we will notify you by email, and you will have a choice as to whether or not we may use your personal data in this manner.</p>
 </div>`
  const scrollRef = useRef()

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }} ref={scrollRef}>
      <FlatList
        ListHeaderComponent={
          <ContentRender htmlData={htmlData} newHeight={1800} />
        }
        ListFooterComponent={
          <Footer navi={navigation} refS={scrollRef} adSelected="MPU" />
        }
        data={[]}
        listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index }) => {}}
      />
    </View>
  )
}

export default PrivacyScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 26,

    fontWeight: 'bold',
    margin: 5,
    alignSelf: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  pageNav: {
    flexDirection: 'row',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
})
