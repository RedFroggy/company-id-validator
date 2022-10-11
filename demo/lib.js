import { CompanyId } from 'company-id-validator';

document.getElementById('validateBtn').addEventListener('click', (event) => {
  const countryCode = document.getElementById('countryCode').value;
  const organizationId = document.getElementById('organizationId').value;
  const companyInfo = CompanyId.info(countryCode, organizationId);
  console.log(companyInfo);

  document.getElementById('company-container').style.display = 'block';
  if (companyInfo.valid) {
    document.getElementById('valid').style.display = 'block';
    document.getElementById('invalid').style.display = 'none';
  } else {
    document.getElementById('valid').style.display = 'none';
    document.getElementById('invalid').style.display = 'block';
  }

  document.getElementById('companyId').innerText = organizationId;
  document.getElementById('country').innerText = `${companyInfo.countryCode} - ${companyInfo.countryName || ''}`;
  document.getElementById('idName').innerText = `${companyInfo.name || ''} - ${companyInfo.fullName || ''}`;
  document.getElementById('vatNumber').innerText = companyInfo.vatNumber || '';
  document.getElementById('description').innerText = companyInfo.description || '';

  document.getElementById('sourceUrl').href = companyInfo.trustedSourceUrl || '';
  document.getElementById('sourceUrl').innerText = companyInfo.trustedSourceUrl || '';

  document.getElementById('parentIdentifier').innerText = companyInfo.parentLevel ? 'yes' : 'no';

  document.getElementById('patterns').innerText = companyInfo.patterns.join('\n');
})
