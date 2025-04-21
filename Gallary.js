



            document.addEventListener('DOMContentLoaded', function() {
                const filterButtons = document.querySelectorAll('.filter-btn');
                const productCards = document.querySelectorAll('.product-card');
                
                filterButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        // Remove active class from all buttons
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Add active class to clicked button
                        this.classList.add('active');
                        
                        const filter = this.getAttribute('data-filter');
                        
                        productCards.forEach(card => {
                            if (filter === 'all') {
                                card.style.display = 'block';
                            } else {
                                const categories = card.getAttribute('data-category').split(' ');
                                if (categories.includes(filter)) {
                                    card.style.display = 'block';
                                } else {
                                    card.style.display = 'none';
                                }
                            }
                        });
                    });
                });
                
             
                
                // Add to cart button click effect
               
            });


            