// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

// Fermer le menu mobile lors du clic sur un lien
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Système de filtres pour le blog
const filterBtns = document.querySelectorAll('.filter-btn');
const blogPosts = document.querySelectorAll('.blog-post');

if (filterBtns.length > 0) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      filterBtns.forEach(b => b.classList.remove('active'));
      // Ajouter la classe active au bouton cliqué
      btn.classList.add('active');
      
      // Récupérer la catégorie sélectionnée
      const category = btn.getAttribute('data-category');
      
      // Filtrer les articles
      blogPosts.forEach(post => {
        const postCategory = post.getAttribute('data-category');
        
        if (category === 'all' || postCategory === category) {
          post.classList.remove('hidden');
        } else {
          post.classList.add('hidden');
        }
      });
    });
  });
}
