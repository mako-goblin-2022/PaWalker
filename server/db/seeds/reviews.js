/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('reviews').del()
  await knex('reviews').insert([
    {
      id: 1,
      reviewer_id: 1,
      reviewee_id: 2,
      date: '9/23/2021',
      title: 'Design for Living',
      review:
        'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.',
      rating: 3,
    },
    {
      id: 2,
      reviewer_id: 2,
      reviewee_id: 1,
      date: '10/3/2021',
      title: 'Gold Raiders',
      review:
        'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
      rating: 4,
    },
    {
      id: 3,
      reviewer_id: 3,
      reviewee_id: 4,
      date: '11/21/2021',
      title: 'Holy Innocents, The (Santos inocentes, Los)',
      review:
        'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      rating: 3,
    },
    {
      id: 4,
      reviewer_id: 3,
      reviewee_id: 4,
      date: '9/11/2021',
      title: 'Motivation, The',
      review:
        'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
      rating: 2,
    },
    {
      id: 5,
      reviewer_id: 3,
      reviewee_id: 5,
      date: '3/15/2022',
      title:
        'Thousand Clouds of Peace, A (Mil nubes de paz cercan el cielo, amor, jamás acabarás de ser amor)',
      review:
        'Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.',
      rating: 4,
    },
    {
      id: 6,
      reviewer_id: 3,
      reviewee_id: 6,
      date: '1/30/2022',
      title: 'Veteran, The',
      review:
        'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      rating: 1,
    },
  ])
}