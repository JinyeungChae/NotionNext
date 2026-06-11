/**
 * Advertisement Integration Plugin
 * * 💡 진단 조치: 외부 노션 DB 및 Vercel 변수의 오염을 방지하기 위해 
 * 질문자님의 진짜 애드센스 ID(pub-7057933429446483)로 완전 고정합니다.
 */
module.exports = {
  // Google AdSense Configuration
  // 💡 내 구글 애드센스 게시자 ID (완전 고정 조치)
  ADSENSE_GOOGLE_ID: 'ca-pub-7057933429446483', 
  
  // 💡 Sandbox/Test Mode: 로컬 개발 중 가짜 테스트 광고를 보려면 true로 변경
  ADSENSE_GOOGLE_TEST: false, 

  // ⚠️ 중요: 아래 SLOT ID들은 애드센스 > 광고 > 광고 단위 기준 메뉴에서 
  // 직접 생성하신 후 본인의 'data-ad-slot' 값으로 교체하셔야 광고가 정상 송출됩니다.
  
  // 💡 인아티클 광고 슬롯 ID
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE: '8366603427', 

  // 💡 인피드 광고 슬롯 ID
  ADSENSE_GOOGLE_SLOT_FLOW: '5740440080', 

  // 💡 멀티플렉스(네이티브) 광고 슬롯 ID
  ADSENSE_GOOGLE_SLOT_NATIVE: '5988391094', 

  // 💡 디스플레이 광고 (자동/반응형) 슬롯 ID
  ADSENSE_GOOGLE_SLOT_AUTO: '4675309423', 

  // WWAds Configuration (중국 기술 블로그용 플랫폼 - 불필요하므로 비활성화 유지)
  AD_WWADS_ID: null, 
  
  // WWAds 광고 차단 감지 기능 비활성화
  AD_WWADS_BLOCK_DETECT: false 
}