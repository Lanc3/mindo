import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused } from '@react-navigation/native'
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import WebRender from './WebRender'
const ads = [
  {
    name: 'LDB_MOBILE',
    private_script: `<!-- App - LDB Mobile Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589388 = window.plc589388 || 0;
            document.write('<'+'div id="placement_589388_'+plc589388+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589388, [300,90], 'placement_589388_'+opt.place, opt); }, opt: { place: plc589388++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- App - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589387 = window.plc589387 || 0;
            document.write('<'+'div id="placement_589387_'+plc589387+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589387, [300,90], 'placement_589387_'+opt.place, opt); }, opt: { place: plc589387++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'MPU',
    private_script: `<!-- - MPU Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542368 = window.plc542368 || 0;
            document.write('<'+'div id="placement_542368_'+plc542368+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542368, [300,250], 'placement_542368_'+opt.place, opt); }, opt: { place: plc542368++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ICS_LDB',
    private_script: `<!--  ICS LDB Mobile Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589399 = window.plc589399 || 0;
            document.write('<'+'div id="placement_589399_'+plc589399+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589399, [300,90], 'placement_589399_'+opt.place, opt); }, opt: { place: plc589399++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!--  ICS LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589400 = window.plc589400 || 0;
            document.write('<'+'div id="placement_589400_'+plc589400+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589400, [300,90], 'placement_589400_'+opt.place, opt); }, opt: { place: plc589400++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ICS_MPU',
    private_script: `<!--  ICS MPU Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589401 = window.plc589401 || 0;
            document.write('<'+'div id="placement_589401_'+plc589401+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589401, [300,250], 'placement_589401_'+opt.place, opt); }, opt: { place: plc589401++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!--  ICS MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589402 = window.plc589402 || 0;
            document.write('<'+'div id="placement_589402_'+plc589402+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589402, [300,250], 'placement_589402_'+opt.place, opt); }, opt: { place: plc589402++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IES_LDB',
    private_script: `<!--  IES Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589403 = window.plc589403 || 0;
            document.write('<'+'div id="placement_589403_'+plc589403+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589403, [300,90], 'placement_589403_'+opt.place, opt); }, opt: { place: plc589403++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IES_MPU',
    private_script: `<!--  IES MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589404 = window.plc589404 || 0;
            document.write('<'+'div id="placement_589404_'+plc589404+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589404, [300,250], 'placement_589404_'+opt.place, opt); }, opt: { place: plc589404++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'SPONSORED_LDB',
    private_script: `<!-- Sponsored Content Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589429 = window.plc589429 || 0;
            document.write('<'+'div id="placement_589429_'+plc589429+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589429, [300,90], 'placement_589429_'+opt.place, opt); }, opt: { place: plc589429++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'SPONSORED_MPU',
    private_script: `<!-- Sponsored Content MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589430 = window.plc589430 || 0;
            document.write('<'+'div id="placement_589430_'+plc589430+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589430, [300,250], 'placement_589430_'+opt.place, opt); }, opt: { place: plc589430++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'PCDSI_LDB',
    private_script: `<!-- PCDSI Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589427 = window.plc589427 || 0;
            document.write('<'+'div id="placement_589427_'+plc589427+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589427, [300,90], 'placement_589427_'+opt.place, opt); }, opt: { place: plc589427++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'PCDSI_MPU',
    private_script: `<!-- PCDSI MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589428 = window.plc589428 || 0;
            document.write('<'+'div id="placement_589428_'+plc589428+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589428, [300,250], 'placement_589428_'+opt.place, opt); }, opt: { place: plc589428++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISR_MPU',
    private_script: `<!-- ISR MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589424 = window.plc589424 || 0;
            document.write('<'+'div id="placement_589424_'+plc589424+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589424, [300,250], 'placement_589424_'+opt.place, opt); }, opt: { place: plc589424++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISR_LDB',
    private_script: `<!-- ISR Mobile LDB [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc589423 = window.plc589423 || 0;
    document.write('<'+'div id="placement_589423_'+plc589423+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589423, [300,90], 'placement_589423_'+opt.place, opt); }, opt: { place: plc589423++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- ISR Mobile LDB [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc589423 = window.plc589423 || 0;
    document.write('<'+'div id="placement_589423_'+plc589423+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589423, [300,90], 'placement_589423_'+opt.place, opt); }, opt: { place: plc589423++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
  },
  {
    name: 'ITS_MPU',
    private_script: `<!-- ITS MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589426 = window.plc589426 || 0;
            document.write('<'+'div id="placement_589426_'+plc589426+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589426, [300,250], 'placement_589426_'+opt.place, opt); }, opt: { place: plc589426++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ITS_LDB',
    private_script: `<!-- ITS Mobile LDB [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc589425 = window.plc589425 || 0;
    document.write('<'+'div id="placement_589425_'+plc589425+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589425, [300,90], 'placement_589425_'+opt.place, opt); }, opt: { place: plc589425++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISMO_LBD',
    private_script: `<!-- ISMO Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589421 = window.plc589421 || 0;
            document.write('<'+'div id="placement_589421_'+plc589421+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589421, [300,90], 'placement_589421_'+opt.place, opt); }, opt: { place: plc589421++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISMO_MPU',
    private_script: `<!-- ISMO MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589422 = window.plc589422 || 0;
            document.write('<'+'div id="placement_589422_'+plc589422+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589422, [300,250], 'placement_589422_'+opt.place, opt); }, opt: { place: plc589422++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISG_LBD',
    private_script: `<!-- ISG Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589419 = window.plc589419 || 0;
            document.write('<'+'div id="placement_589419_'+plc589419+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589419, [300,90], 'placement_589419_'+opt.place, opt); }, opt: { place: plc589419++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'ISG_MPU',
    private_script: `<!-- ISG MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589420 = window.plc589420 || 0;
            document.write('<'+'div id="placement_589420_'+plc589420+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589420, [300,250], 'placement_589420_'+opt.place, opt); }, opt: { place: plc589420++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IOS_LBD',
    private_script: `<!--  IOS Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589416 = window.plc589416 || 0;
            document.write('<'+'div id="placement_589416_'+plc589416+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589416, [300,90], 'placement_589416_'+opt.place, opt); }, opt: { place: plc589416++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IOS_MPU',
    private_script: `<!-- IOS MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589418 = window.plc589418 || 0;
            document.write('<'+'div id="placement_589418_'+plc589418+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589418, [300,250], 'placement_589418_'+opt.place, opt); }, opt: { place: plc589418++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IICNINA_LBD',
    private_script: `<!-- IICN / INA LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589405 = window.plc589405 || 0;
            document.write('<'+'div id="placement_589405_'+plc589405+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589405, [300,90], 'placement_589405_'+opt.place, opt); }, opt: { place: plc589405++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'IICNINA_MPU',
    private_script: `<!-- • IICN / INA MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589406 = window.plc589406 || 0;
            document.write('<'+'div id="placement_589406_'+plc589406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589406, [300,250], 'placement_589406_'+opt.place, opt); }, opt: { place: plc589406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'CPI_LBD',
    private_script: `<!-- CPI LDB Mobile Private [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc597117 = window.plc597117 || 0;
    document.write('<'+'div id="placement_597117_'+plc597117+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 597117, [300,90], 'placement_597117_'+opt.place, opt); }, opt: { place: plc597117++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'CPI_MPU',
    private_script: `<!-- CPI MPU Private [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc597116 = window.plc597116 || 0;
    document.write('<'+'div id="placement_597116_'+plc597116+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 597116, [300,250], 'placement_597116_'+opt.place, opt); }, opt: { place: plc597116++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'HAI Mobile LDB',
    private_script: `<!-- HAI Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589433 = window.plc589433 || 0;
            document.write('<'+'div id="placement_589433_'+plc589433+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589433, [300,90], 'placement_589433_'+opt.place, opt); }, opt: { place: plc589433++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'HAI MPU',
    private_script: `<!-- HAI MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589434 = window.plc589434 || 0;
            document.write('<'+'div id="placement_589434_'+plc589434+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589434, [300,250], 'placement_589434_'+opt.place, opt); }, opt: { place: plc589434++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'Motoring Mobile LDB',
    private_script: `<!-- Motoring Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589431 = window.plc589431 || 0;
            document.write('<'+'div id="placement_589431_'+plc589431+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589431, [300,90], 'placement_589431_'+opt.place, opt); }, opt: { place: plc589431++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'Motoring MPU',
    private_script: `<!-- Motoring MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc589432 = window.plc589432 || 0;
            document.write('<'+'div id="placement_589432_'+plc589432+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589432, [300,250], 'placement_589432_'+opt.place, opt); }, opt: { place: plc589432++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'App Test Mobile LDB',
    private_script: `<!-- App Test Mobile LDB [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc589440 = window.plc589440 || 0;
    document.write('<'+'div id="placement_589440_'+plc589440+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589440, [300,90], 'placement_589440_'+opt.place, opt); }, opt: { place: plc589440++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'App Test MPU',
    private_script: `<!-- App Test MPU [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc589441 = window.plc589441 || 0;
    document.write('<'+'div id="placement_589441_'+plc589441+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 589441, [300,250], 'placement_589441_'+opt.place, opt); }, opt: { place: plc589441++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'INS_LDB',
    private_script: `<!-- INS Mobile LDB [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc596792 = window.plc596792 || 0;
    document.write('<'+'div id="placement_596792_'+plc596792+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 596792, [300,90], 'placement_596792_'+opt.place, opt); }, opt: { place: plc596792++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
  {
    name: 'INS_MPU',
    private_script: `<!-- INS MPU [async] -->
    <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
    <script type="text/javascript">
    var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
    var abkw = window.abkw || '';
    var plc596793 = window.plc596793 || 0;
    document.write('<'+'div id="placement_596793_'+plc596793+'"></'+'div>');
    AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 596793, [300,250], 'placement_596793_'+opt.place, opt); }, opt: { place: plc596793++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
    </script>`,
    public_script: `<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
  },
]

export function AdManager(props) {
  const isFocused = useIsFocused()
  const selectedAd = props.selectedAd
  const sizeType = props.sizeType
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const getAd = (adZone) => {
    var __FOUND = ads.find(function (ad, index) {
      if (ad.name === adZone) return true
    })
    if (typeof __FOUND !== 'undefined') {
      if (isLoggedIn) {
        return __FOUND.private_script
      } else {
        return __FOUND.public_script
      }
    }
  }
  const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile')
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value).freeAccount)
      } else {
      }
    } catch (error) {
      // Error retrieving data
    }
  }, [])
  useEffect(() => {
    ;(async () => {
      const data = await AsyncStorage.getItem('userProfile')
      if (data !== null) setIsLoggedIn(JSON.parse(data).isLoggedIn)
    })()
  }, [isFocused])

  return (
    <View style={styles.container} renderToHardwareTextureAndroid={true}>
      {sizeType === 'BIG' ? (
        <View style={styles.containerBig} renderToHardwareTextureAndroid={true}>
          <View style={styles.bigImage} renderToHardwareTextureAndroid={true}>
            <WebRender htmlData={getAd(selectedAd)} />
          </View>
        </View>
      ) : (
        <View style={styles.container} renderToHardwareTextureAndroid={true}>
          <View style={styles.image} renderToHardwareTextureAndroid={true}>
            <WebRender htmlData={getAd(selectedAd)} />
          </View>
        </View>
      )}
    </View>
  )
}

const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    width: windowWidth,

    justifyContent: 'center',
    alignItems: 'center',
  },
  containerBig: {
    width: 310,
    height: 300,
  },
  containerSmall: {
    width: 310,
    height: 100,
  },
  image: {
    width: 310,
  },
  bigImage: {
    flex: 1,
    width: 310,
    height: 200,
  },
})
