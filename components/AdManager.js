import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import WebRender from './WebRender';
const ads = [
        {
            name:"LDB_MOBILE",
            private_script:`<!-- - LDB Mobile Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542405 = window.plc542405 || 0;
            document.write('<'+'div id="placement_542405_'+plc542405+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542405, [300,90], 'placement_542405_'+opt.place, opt); }, opt: { place: plc542405++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"MPU",
            private_script:`<!-- - MPU Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542368 = window.plc542368 || 0;
            document.write('<'+'div id="placement_542368_'+plc542368+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542368, [300,250], 'placement_542368_'+opt.place, opt); }, opt: { place: plc542368++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ICS_LDB",
            private_script:`<!-- ICS LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc552026 = window.plc552026 || 0;
            document.write('<'+'div id="placement_552026_'+plc552026+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 552026, [300,160], 'placement_552026_'+opt.place, opt); }, opt: { place: plc552026++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- ICS LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc572080 = window.plc572080 || 0;
            document.write('<'+'div id="placement_572080_'+plc572080+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 572080, [300,90], 'placement_572080_'+opt.place, opt); }, opt: { place: plc572080++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ICS_MPU",
            private_script:`<!-- ICS MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc545734 = window.plc545734 || 0;
            document.write('<'+'div id="placement_545734_'+plc545734+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 545734, [300,250], 'placement_545734_'+opt.place, opt); }, opt: { place: plc545734++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- ICS MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc572081 = window.plc572081 || 0;
            document.write('<'+'div id="placement_572081_'+plc572081+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 572081, [300,250], 'placement_572081_'+opt.place, opt); }, opt: { place: plc572081++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IES_LDB",
            private_script:`<!-- IES Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc587298 = window.plc587298 || 0;
            document.write('<'+'div id="placement_587298_'+plc587298+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 587298, [300,90], 'placement_587298_'+opt.place, opt); }, opt: { place: plc587298++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IES_MPU",
            private_script:`<!-- IES MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc587296 = window.plc587296 || 0;
            document.write('<'+'div id="placement_587296_'+plc587296+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 587296, [300,250], 'placement_587296_'+opt.place, opt); }, opt: { place: plc587296++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"SPONSORED_LDB",
            private_script:`<!-- Sponsored Content LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc571630 = window.plc571630 || 0;
            document.write('<'+'div id="placement_571630_'+plc571630+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 571630, [300,90], 'placement_571630_'+opt.place, opt); }, opt: { place: plc571630++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"SPONSORED_MPU",
            private_script:`<!-- Sponsored Content MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc571629 = window.plc571629 || 0;
            document.write('<'+'div id="placement_571629_'+plc571629+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 571629, [300,250], 'placement_571629_'+opt.place, opt); }, opt: { place: plc571629++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"PCDSI_LDB",
            private_script:`<!-- PCDSI LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542442 = window.plc542442 || 0;
            document.write('<'+'div id="placement_542442_'+plc542442+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542442, [320,50], 'placement_542442_'+opt.place, opt); }, opt: { place: plc542442++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"PCDSI_MPU",
            private_script:`<!-- PCDSI MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542443 = window.plc542443 || 0;
            document.write('<'+'div id="placement_542443_'+plc542443+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542443, [300,250], 'placement_542443_'+opt.place, opt); }, opt: { place: plc542443++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISR_MPU",
            private_script:`<!-- ISR MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc568990 = window.plc568990 || 0;
            document.write('<'+'div id="placement_568990_'+plc568990+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 568990, [300,250], 'placement_568990_'+opt.place, opt); }, opt: { place: plc568990++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISR_LDB",
            private_script:`<!-- ISR LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc568983 = window.plc568983 || 0;
            document.write('<'+'div id="placement_568983_'+plc568983+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 568983, [300,90], 'placement_568983_'+opt.place, opt); }, opt: { place: plc568983++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ITS_MPU",
            private_script:`<!-- ITS MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542439 = window.plc542439 || 0;
            document.write('<'+'div id="placement_542439_'+plc542439+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542439, [300,250], 'placement_542439_'+opt.place, opt); }, opt: { place: plc542439++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ITS_LDB",
            private_script:`<!-- ITS LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc544972 = window.plc544972 || 0;
            document.write('<'+'div id="placement_544972_'+plc544972+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 544972, [728,90], 'placement_544972_'+opt.place, opt); }, opt: { place: plc544972++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISMO_LBD",
            private_script:`<!-- ISMO LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542437 = window.plc542437 || 0;
            document.write('<'+'div id="placement_542437_'+plc542437+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542437, [320,50], 'placement_542437_'+opt.place, opt); }, opt: { place: plc542437++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISMO_MPU",
            private_script:`<!-- ISMO MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542438 = window.plc542438 || 0;
            document.write('<'+'div id="placement_542438_'+plc542438+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542438, [300,250], 'placement_542438_'+opt.place, opt); }, opt: { place: plc542438++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISG_LBD",
            private_script:`<!-- ISG LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542434 = window.plc542434 || 0;
            document.write('<'+'div id="placement_542434_'+plc542434+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542434, [320,50], 'placement_542434_'+opt.place, opt); }, opt: { place: plc542434++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"ISG_MPU",
            private_script:`<!-- ISG MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542435 = window.plc542435 || 0;
            document.write('<'+'div id="placement_542435_'+plc542435+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542435, [300,250], 'placement_542435_'+opt.place, opt); }, opt: { place: plc542435++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IOS_LBD",
            private_script:`<!-- IOS Mobile LDB [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc587301 = window.plc587301 || 0;
            document.write('<'+'div id="placement_587301_'+plc587301+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 587301, [300,90], 'placement_587301_'+opt.place, opt); }, opt: { place: plc587301++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IOS_MPU",
            private_script:`<!-- IOS MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc587299 = window.plc587299 || 0;
            document.write('<'+'div id="placement_587299_'+plc587299+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 587299, [300,250], 'placement_587299_'+opt.place, opt); }, opt: { place: plc587299++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IICNINA_LBD",
            private_script:`<!-- IICN / INA LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542431 = window.plc542431 || 0;
            document.write('<'+'div id="placement_542431_'+plc542431+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542431, [320,50], 'placement_542431_'+opt.place, opt); }, opt: { place: plc542431++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IICNINA_MPU",
            private_script:`<!-- IICN / INA MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542432 = window.plc542432 || 0;
            document.write('<'+'div id="placement_542432_'+plc542432+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542432, [300,250], 'placement_542432_'+opt.place, opt); }, opt: { place: plc542432++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IICNINA_LBD",
            private_script:`<!-- IICN / INA LDB Mobile [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542431 = window.plc542431 || 0;
            document.write('<'+'div id="placement_542431_'+plc542431+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542431, [320,50], 'placement_542431_'+opt.place, opt); }, opt: { place: plc542431++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"IICNINA_MPU",
            private_script:`<!-- IICN / INA MPU [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542432 = window.plc542432 || 0;
            document.write('<'+'div id="placement_542432_'+plc542432+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542432, [300,250], 'placement_542432_'+opt.place, opt); }, opt: { place: plc542432++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"CPI_LBD",
            private_script:`<!-- CPI LDB Mobile Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc547131 = window.plc547131 || 0;
            document.write('<'+'div id="placement_547131_'+plc547131+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 547131, [320,50], 'placement_547131_'+opt.place, opt); }, opt: { place: plc547131++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - LDB Mobile Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542406 = window.plc542406 || 0;
            document.write('<'+'div id="placement_542406_'+plc542406+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542406, [300,90], 'placement_542406_'+opt.place, opt); }, opt: { place: plc542406++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
        {
            name:"CPI_MPU",
            private_script:`<!-- CPI MPU Private [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc547130 = window.plc547130 || 0;
            document.write('<'+'div id="placement_547130_'+plc547130+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 547130, [300,250], 'placement_547130_'+opt.place, opt); }, opt: { place: plc547130++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`,
            public_script:`<!-- - MPU Public [async] -->
            <script type="text/javascript">if (!window.AdButler){(function(){var s = document.createElement("script"); s.async = true; s.type = "text/javascript";s.src = 'https://servedbyadbutler.com/app.js';var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(s, n);}());}</script>
            <script type="text/javascript">
            var AdButler = AdButler || {}; AdButler.ads = AdButler.ads || [];
            var abkw = window.abkw || '';
            var plc542369 = window.plc542369 || 0;
            document.write('<'+'div id="placement_542369_'+plc542369+'"></'+'div>');
            AdButler.ads.push({handler: function(opt){ AdButler.register(183389, 542369, [300,250], 'placement_542369_'+opt.place, opt); }, opt: { place: plc542369++, keywords: abkw, domain: 'servedbyadbutler.com', click:'CLICK_MACRO_PLACEHOLDER' }});
            </script>`
        },
    ];

export function AdManager(props) {
    const isFocused = useIsFocused();
    const selectedAd = props.selectedAd;
    const sizeType = props.sizeType;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getAd = (adZone) => {
        var __FOUND = ads.find(function(ad, index) {
            if(ad.name === adZone)
               return true;
        });
        if(typeof __FOUND !== 'undefined'){
            if(isLoggedIn)
            {
                return __FOUND.private_script;
            }
            else{
                return __FOUND.public_script;
            }
        }
    }
    const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile');
      if (value !== null) {
        setIsLoggedIn(JSON.parse(value).freeAccount);
      }
      else{

      }
    } catch (error) {
      // Error retrieving data
    }
},[]);
useEffect(() => { 
    (async () => {
        const data = await AsyncStorage.getItem('userProfile');
        if(data !== null)
        setIsLoggedIn(JSON.parse(data).isLoggedIn);
    })()
}, [isFocused]);

    return (
        <View style={styles.container}>
            {sizeType === 'BIG' ?
            <View style={styles.containerBig}>
            <View style={styles.bigImage}>
                <WebRender htmlData={getAd(selectedAd)}/>
            </View>
            </View>
            :
            <View style={styles.container}>
            <View style={styles.image}>
                <WebRender htmlData={getAd(selectedAd)}/>
            </View>
            </View>
            }
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        width:windowWidth,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    containerBig:{
        width:310,
        height:300,
    },
    image:{
        width:310,
    },
    bigImage:{
        flex:1,
        width:310,
    }
})