import { GraphQLClient, gql } from 'graphql-request';

const HYGRAPH_URL = 'https://sa-east-1.cdn.hygraph.com/content/clsbsbso32s1w01uq2z0e7cvv/master';
const HYGRAPH_PERMANENTAUTH_TOKEN = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MDczMTQ2NzcsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuaHlncmFwaC5jb20vdjIvY2xzYnNic28zMnMxdzAxdXEyejBlN2N2di9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC1zYS1lYXN0LTEuaHlncmFwaC5jb20vIiwic3ViIjoiMzkyN2U0NTMtZjNkNi00MWI4LTk5ZTUtZmFkZDgzMDFjOWFkIiwianRpIjoiY2xzYnYyc2Q5MW45NTAxbHMxb25jMHc0YiJ9.O40T1rp64gwv-jg81iaOmsRjTWO2VwNF2gRbS2wiBYcJ7NA5QnsPhktptIpjPYBOa6RGSGmDSiTgH3igl4Tdg-PuQ5BfTpriZfu5AMm0sXP1kkX0dNg2XHX_msMkEbMvpEWMfY3CZTIusLPJWtdVI72SgayYMRbwh3GoX-KOBfGiJYwk_bDota5VDR9bBI-Q_TJiQuUhnpdAxR7s1AyJlOikXWZbUJBcDme0izxVfKRP-NY1kcCxKqS1qYdi75zJP5yN3edJTCyU2P3Q-jzawtjjQZZQNLnH8s_1LZZI3CwUEXsg8sVR7CZh3WUeoC8N_5m23ukCu3fj3WIun4CNkTs5cj9dJB_HnuQMomXBT1i97OMhW7fOrl27UOpo3wcJPVMdp_a61v8hzekZnvEUzEgU8avMmQN9TPcBPpoeCLb3u4ib64AEX1b8t1MLFahVLbIJXeaZH6W1eviqvAqnbKAmylBeU-aXCZWkKef8BTcr51aAawvk2uvUl3ZXj08YNVcfa_hmz0qADg3uaNenQuwVVDuka_VFra926r7mvN3K_1bhiKMKX5IJXLbem2fo_zbOtugF8Y_ilVuIm14V3TIw_ngFEqPu5HLtsy9GqDXt1n2yaxY4S5sn1lb8hTzuqtwU9THE3mPDShGFUZbetzONskZL2rGmkesIc_XhITo';

const gql_client = new GraphQLClient(HYGRAPH_URL, {
    headers: {
      Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
    errorPolicy: 'ignore',
    next:{revalidate: 10}
});

function getNodeIndex(node: any) {
  var index = 0;
  while (node = node.previousElementSibling) {
      index++;
  }
  return index;
}

export {
    gql_client,
    getNodeIndex
};