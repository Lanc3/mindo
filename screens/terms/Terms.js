import React, { useRef } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import ContentRender from '../../components/ContentRender'
import { Footer } from '../../components/Footer'

const Terms = ({ navigation }) => {
  const htmlData = `<style>
    a:link {
      color: black;
      background-color: transparent;
      text-decoration: none;
    }</style><div class="row justify-content-center"><div class="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12" id="single-big-col-1"><h1 class="main-title-text">Terms &amp; Conditions</h1>
<p>This website&nbsp;<a href="https://www.medicalindependent.ie/"><strong>www.medicalindependent.ie</strong></a>&nbsp;(aka&nbsp;<a href="http://www.mindo.ie/"><strong>www.mindo.ie</strong></a>) is owned by GreenCross Publishing Ltd. This website is offered to you upon condition of your acceptance without modification of the terms and conditions. By viewing and using the site you are deemed to consent to and accept the terms and conditions. Please read this agreement carefully as it sets out your rights and obligations with respect to the use of the site and its services.</p>
<p>GreenCross Publishing Ltd reserves the right to change, modify, add or remove portions of these terms and conditions at any time and without prior notice. Please check this page from time to time for any modifications. Your continued use of this site following the posting of any changes will mean that you have accepted the changes.</p>
<h2 id="data-protection"><strong>Data protection</strong></h2>
<p>All information received by us from your use of this website will be used in accordance with&nbsp;<a href="https://www.medicalindependent.ie/privacy-statement/"><strong>GreenCross Publishing’s Privacy Policy</strong></a>.</p>
<h2 id="copyrights"><strong>Copyrights</strong></h2>
<p>All content in this site, including site layout, design, images, programs, text and other information is the property of GreenCross Publishing Ltd and is protected by copyright and other intellectual property laws. You may not copy, display, distribute, modify, publish, reproduce, store, transmit, create derivative works from, or sell or license all or any part of the content of this site in any medium to anyone, except as otherwise expressly permitted under applicable law or as described in these terms and conditions or relevant licence or subscriber agreement.</p>
<p>You may print or download content from the site for your own personal, non-commercial use, provided that you keep intact all copyright and other proprietary notices. You may not engage in systematic retrieval of content from the site to create or compile, directly or indirectly, a collection, compilation, database or directory without prior written permission from GreenCross Publishing Ltd.</p>
<h2 id="advertising"><strong>Advertising</strong></h2>
<p>You may see advertising material submitted by third parties on the site. Individual advertisers are solely responsible for the content of advertising material, which they submit to us, including ensuring that it complies with relevant legislation. We accept no responsibility for the content of advertising material, including, without limitation, any error, omission or inaccuracy.</p>
<h2 id="links"><strong>Links</strong></h2>
<p><a href="https://www.medicalindependent.ie/"><strong>www.medicalindependent.ie</strong></a>&nbsp;may contain hyperlinks to other sites or resources that are provided solely for your convenience. GreenCross Publishing Ltd is not responsible for the availability of external sites or resources linked to the&nbsp;<a href="https://medicalindependent.ie/"><strong>medicalindependent.ie</strong></a>&nbsp;site, and does not endorse and is not responsible or liable for any content, advertising, products or other materials on or available from such sites or resources. Transactions that occur between you and any third party are strictly between you and the third party and are not the responsibility of GreenCross Publishing Ltd. Because GreenCross Publishing Ltd is not responsible for the availability or accuracy of these outside resources or their contents, you should review the terms and conditions and privacy policies of these linked sites, as their policies may differ from ours.</p>
<h2 id="disclaimer"><strong>Disclaimer</strong></h2>
<p><a href="https://www.medicalindependent.ie/"><strong>www.medicalindependent.ie</strong></a>&nbsp;including its eCopy endeavours to ensure the accuracy of information given and of claims made in articles and advertisements. Nevertheless, no responsibility is accepted in respect of such information or claims. Any opinions expressed by contributors are entirely their own and do not purport to be the views of&nbsp;<em>The Medical Independent</em>&nbsp;<a href="https://www.medicalindependent.ie/"><strong>www.medicalindependent.ie</strong></a>.</p>
<p>Neither GreenCross Publishing Ltd,&nbsp;<a href="https://www.medicalindependent.ie/"><strong>www.medicalindependent.ie</strong></a>, its affiliates, nor any third-party content providers or licensors makes any warranty whatsoever, including without limitation, that the operation of the site will be uninterrupted or error free; that defects will be corrected; that this site, including the server that makes it available, is free of viruses or other harmful components; as to the results that may be obtained from use of the content or other materials on the site; or as to the accuracy, completeness, reliability, availability, suitability, quality, non-infringement or operation of any content, product or service provided on or accessible from the site.</p>
<p>This site and all content, products and services included in or accessible from this site are provided “as is” and without warranties or representations of any kind (express, implied and statutory, including but not limited to the warranties of title and non-infringement and the implied warranties of merchantability and fitness for a particular purpose), all of which GreenCross Publishing Ltd disclaims to the fullest extent permitted by law. Your use of the site is at your sole risk.</p>
<h2 id="indemnification"><strong>Indemnification</strong></h2>
<p>You hereby agree to indemnify, defend and hold GreenCross Publishing Ltd, and its owners, agents and employees harmless from and against any and all liability, losses, damages and costs, including, without limitation, reasonable attorneys’ fees, arising from your use of this website or content.</p>
<h2 id="governing-law"><strong>Governing law</strong></h2>
<p>These terms and conditions shall be governed by and construed in accordance with the laws of the Republic of Ireland. Any disputes relating to such contract shall be subject to the exclusive jurisdiction of the Irish Courts.</p>
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

export default Terms

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
    alignItems: 'center',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
})
