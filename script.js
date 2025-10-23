const MANAGER = { name: 'Александр Чернышев', role: 'Менеджер по подбору персонала', photo: 'assets/manager-neutral.jpg', whatsapp: '447871708993', telegram: 'alexchernyshev08' };
const DEFAULT_WA_TEXT = 'Здравствуйте! Хочу вакансии в Дубае.';

function waLink(n, t) { return 'https://wa.me/' + encodeURIComponent(n) + '?text=' + encodeURIComponent(t || DEFAULT_WA_TEXT) }

function tgLink(u) { return 'https://t.me/' + u }

function init() {
    document.getElementById('mName').textContent = MANAGER.name;
    document.getElementById('mRole').textContent = MANAGER.role;
    document.getElementById('mPhoto').src = MANAGER.photo;
    const wa = document.getElementById('btnWa'),
        tg = document.getElementById('btnTg');
    if (MANAGER.whatsapp) wa.href = waLink(MANAGER.whatsapp);
    else wa.style.display = 'none';
    if (MANAGER.telegram) tg.href = tgLink(MANAGER.telegram);
    else tg.style.display = 'none';
}
document.addEventListener('DOMContentLoaded', init);