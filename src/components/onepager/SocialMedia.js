import React, { Component } from 'react';

function SocialMedia() {
  return (
    <>
			<div className="grid place-items-center mx-auto sm:my-auto text-sm">      
        <div className="flex items-center justify-center space-x-1">
          <button onClick={ () => goToLink('https://twitter.com/spacerbots') } style={{ backgroundColor: 'darkgray'}} className="px-3 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg className="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              <span>Twitter</span>
          </button>
          <button onClick={ () => goToLink('https://www.instagram.com/spacerbots/') } style={{ backgroundColor: 'darkgray'}} className="px-3 py-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
              <svg alt="" width="25px" height="19px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="100%" y1="29.6119491%" x2="1.8547063%" y2="61.8039138%" id="gradient"><stop stop-color="white" offset="0%"></stop><stop stop-color="#F50000" offset="100%"></stop></linearGradient></defs><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-705.000000, -41.000000)" fill="#FFFFFF"><path d="M720.994984,41.0100952 C725.338921,41.0100952 725.883619,41.0285079 727.589651,41.1063492 C729.292127,41.184 730.454857,41.4544127 731.472254,41.8498413 C732.524063,42.2585397 733.416063,42.8054603 734.305333,43.6946667 C735.19454,44.5839365 735.74146,45.4759365 736.150222,46.527746 C736.545587,47.5451429 736.816,48.707873 736.893651,50.4103492 C736.971492,52.116381 736.989905,52.6610794 736.989905,57.0050794 C736.989905,61.3490159 736.971492,61.8937143 736.893651,63.599746 C736.816,65.3022222 736.545587,66.4649524 736.150222,67.4823492 C735.74146,68.5341587 735.19454,69.4261587 734.305333,70.3154286 C733.416063,71.2046349 732.524063,71.7515556 731.472254,72.1603175 C730.454857,72.5556825 729.292127,72.8260952 727.589651,72.903746 C725.883619,72.9815873 725.338921,73 720.994984,73 C716.650984,73 716.106286,72.9815873 714.400254,72.903746 C712.697778,72.8260952 711.535048,72.5556825 710.517651,72.1603175 C709.465841,71.7515556 708.573841,71.2046349 707.684571,70.3154286 C706.795365,69.4261587 706.248444,68.5341587 705.839746,67.4823492 C705.444317,66.4649524 705.173905,65.3022222 705.096254,63.599746 C705.018413,61.8937143 705,61.3490159 705,57.0050794 C705,52.6610794 705.018413,52.116381 705.096254,50.4103492 C705.173905,48.707873 705.444317,47.5451429 705.839746,46.527746 C706.248444,45.4759365 706.795365,44.5839365 707.684571,43.6946667 C708.573841,42.8054603 709.465841,42.2585397 710.517651,41.8498413 C711.535048,41.4544127 712.697778,41.184 714.400254,41.1063492 C716.106286,41.0285079 716.650984,41.0100952 720.994984,41.0100952 Z M727.458286,43.9853333 C725.771683,43.908381 725.265778,43.8920635 720.994984,43.8920635 C716.724127,43.8920635 716.218222,43.908381 714.531619,43.9853333 C712.972127,44.0564444 712.125206,44.3170159 711.561587,44.5360635 C710.814984,44.8262222 710.282159,45.1728254 709.722476,45.7325714 C709.16273,46.292254 708.816127,46.8250794 708.525968,47.5716825 C708.306921,48.1353016 708.046349,48.9822222 707.975238,50.5417143 C707.898286,52.2283175 707.881968,52.7342222 707.881968,57.0050794 C707.881968,61.275873 707.898286,61.7817778 707.975238,63.468381 C708.046349,65.027873 708.306921,65.8747937 708.525968,66.4384127 C708.816127,67.1850159 709.162794,67.7178413 709.722476,68.2775238 C710.282159,68.8372698 710.814984,69.183873 711.561587,69.4740317 C712.125206,69.6930794 712.972127,69.9536508 714.531619,70.0247619 C716.218032,70.1017143 716.72381,70.1180317 720.994984,70.1180317 C725.266095,70.1180317 725.771937,70.1017143 727.458286,70.0247619 C729.017778,69.9536508 729.864698,69.6930794 730.428317,69.4740317 C731.174921,69.183873 731.707746,68.8372698 732.267429,68.2775238 C732.827175,67.7178413 733.173778,67.1850159 733.463937,66.4384127 C733.682984,65.8747937 733.943556,65.027873 734.014667,63.468381 C734.091619,61.7817778 734.107937,61.275873 734.107937,57.0050794 C734.107937,52.7342222 734.091619,52.2283175 734.014667,50.5417143 C733.943556,48.9822222 733.682984,48.1353016 733.463937,47.5716825 C733.173778,46.8250794 732.827175,46.292254 732.267429,45.7325714 C731.707746,45.1728254 731.174921,44.8262222 730.428317,44.5360635 C729.864698,44.3170159 729.017778,44.0564444 727.458286,43.9853333 Z M720.994984,62.3366984 C723.939556,62.3366984 726.326603,59.9496508 726.326603,57.0050794 C726.326603,54.0604444 723.939556,51.6733968 720.994984,51.6733968 C718.050349,51.6733968 715.663302,54.0604444 715.663302,57.0050794 C715.663302,59.9496508 718.050349,62.3366984 720.994984,62.3366984 Z M720.994984,48.7914286 C725.531238,48.7914286 729.208571,52.4687619 729.208571,57.0050794 C729.208571,61.5413333 725.531238,65.2186667 720.994984,65.2186667 C716.458667,65.2186667 712.781333,61.5413333 712.781333,57.0050794 C712.781333,52.4687619 716.458667,48.7914286 720.994984,48.7914286 Z M731.452508,48.4669206 C731.452508,49.5269841 730.593143,50.3862857 729.533079,50.3862857 C728.473079,50.3862857 727.613714,49.5269841 727.613714,48.4669206 C727.613714,47.4068571 728.473079,46.5474921 729.533079,46.5474921 C730.593143,46.5474921 731.452508,47.4068571 731.452508,48.4669206 Z"></path></g></g></svg>
              <span>Instagram</span>
          </button>
        </div>
			</div>
    </>
  );
}

const goToLink = (url) => {
  document.location.href = url;
}

export default SocialMedia;
