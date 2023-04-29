import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pageInfo',
  title: 'PageInto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    }, {
      name: "heroImage",
      title: "Image",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "backgroundInformation",
      title: "Background Information",
      type: "string",
      options: {
        hotspot: true
      }
    },
    {
      name: "profilePic",
      title: "ProfilePic",
      type: "image",
      options: {
        hotspot: true
      }
    },
    {
      name: "phoneNumber",
      title: "PhoneNumber",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: 'reference',
          to: {
            type: 'social',
          },
        },
      ],
    }
  ],

})
