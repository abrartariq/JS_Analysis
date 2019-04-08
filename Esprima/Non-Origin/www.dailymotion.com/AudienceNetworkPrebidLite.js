/*1554547736,,JIT Construction: v1000576560,en_US*/

/**
 * Copyright (c) 2017-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
try {"use strict";(function(){var a=15*60*60*1e3,b=3*60*60*1e3,c={},d={},e=function(a){this._placementID=a};e.prototype._getKey=function(){return"adnw_prebid:"+this._placementID};e.prototype._tryGetToken=function(){var d=null;try{d=window.localStorage.getItem(this._getKey())}catch(a){d=c[this._getKey()]}if(d){d=JSON.parse(d);if(d.hasToken){if(d.createdTime>Date.now()-a)return d.token}else if(d.createdTime>Date.now()-b)return d.token}return null};e.prototype._tryStoreToken=function(a){a=JSON.stringify({hasToken:a!=="nobid",token:a,createdTime:Date.now()});try{window.localStorage.setItem(this._getKey(),a)}catch(b){c[this._getKey()]=a}};e.prototype.getProfile=function(a){var b={placementid:this._placementID,token_type:"lite"},c=this._tryGetToken();if(c){a({token:c});return}c=function(){a({token:"nobid"})};var e=function(b){b=JSON.parse(b);var c="nobid";typeof b==="object"&&typeof b.token==="string"&&(c=b.token);this._tryStoreToken(c);try{a({token:c})}catch(a){}};try{var f=d[this._getKey()];f||(f=[],d[this._getKey()]=f);f.push({onError:c,onLoad:e});if(f.length>1)return;var g=new XMLHttpRequest();if(!("withCredentials"in g)){c();return}g.open("POST","https://an.facebook.com/v1/prebid.json",!0);g.withCredentials=!0;g.setRequestHeader("Content-type","application/x-www-form-urlencoded");g.onreadystatechange=function(){g.readyState===4&&(d[this._getKey()]=[],f.forEach(function(a){g.status===200?a.onLoad.apply(this,[g.responseText]):a.onError.apply(this)}.bind(this)))}.bind(this);var h=[];Object.keys(b).forEach(function(a){var c=b[a];h.push(encodeURIComponent(a)+"="+encodeURIComponent(c))});g.send(h.join("&"))}catch(a){c()}};window.AudienceNetworkPrebid=e;window.anPrebidAsyncInit&&window.anPrebidAsyncInit()})();} catch (e) {new Image().src="https:\/\/www.facebook.com\/" + 'common/scribe_endpoint.php?c=jssdk_error&m='+encodeURIComponent('{"error":"LOAD", "extra": {"name":"'+e.name+'","line":"'+(e.lineNumber||e.line)+'","script":"'+(e.fileName||e.sourceURL||e.script)+'","stack":"'+(e.stackTrace||e.stack)+'","revision":"1000576560","namespace":"FB","message":"'+e.message+'"}}');}